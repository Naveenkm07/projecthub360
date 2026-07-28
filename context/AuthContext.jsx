'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const isAdmin = user?.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL;

    useEffect(() => {
        if (!supabase) {
            setLoading(false);
            return;
        }

        // Get initial session
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (session?.user) {
                // Map Supabase user to our expected format
                setUser({
                    ...session.user,
                    displayName: session.user.user_metadata?.full_name || session.user.user_metadata?.name || '',
                });
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            if (session?.user) {
                setUser({
                    ...session.user,
                    displayName: session.user.user_metadata?.full_name || session.user.user_metadata?.name || '',
                });
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => subscription.unsubscribe();
    }, []);

    const signup = async (email, password, displayName) => {
        if (!supabase) return Promise.reject(new Error('Supabase not configured'));
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    full_name: displayName,
                },
            },
        });
        if (error) throw error;
        return data;
    };

    const login = async (email, password) => {
        if (!supabase) return Promise.reject(new Error('Supabase not configured. Add .env.local credentials.'));
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        if (error) throw error;
        return data;
    };

    const loginWithGoogle = async () => {
        if (!supabase) return Promise.reject(new Error('Supabase not configured'));
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: typeof window !== 'undefined' ? `${window.location.origin}/dashboard` : '',
            }
        });
        if (error) throw error;
        return data;
    };

    const logout = async () => {
        if (!supabase) return Promise.resolve();
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
    };

    return (
        <AuthContext.Provider value={{ user, loading, isAdmin, signup, login, loginWithGoogle, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be used within AuthProvider');
    return ctx;
};
