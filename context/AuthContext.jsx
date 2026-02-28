'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile,
    GoogleAuthProvider,
    signInWithPopup,
} from 'firebase/auth';
import { auth } from '@/lib/firebase';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const isAdmin = user?.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL;

    useEffect(() => {
        // auth is null when Firebase isn't initialized (no env vars or SSR)
        if (!auth) {
            setLoading(false);
            return;
        }
        const unsub = onAuthStateChanged(auth, (u) => {
            setUser(u);
            setLoading(false);
        });
        return unsub;
    }, []);

    const signup = (email, password, displayName) => {
        if (!auth) return Promise.reject(new Error('Firebase not configured'));
        return createUserWithEmailAndPassword(auth, email, password).then((cred) =>
            updateProfile(cred.user, { displayName })
        );
    };

    const login = (email, password) => {
        if (!auth) return Promise.reject(new Error('Firebase not configured. Add .env.local credentials.'));
        return signInWithEmailAndPassword(auth, email, password);
    };

    const loginWithGoogle = () => {
        if (!auth) return Promise.reject(new Error('Firebase not configured'));
        return signInWithPopup(auth, new GoogleAuthProvider());
    };

    const logout = () => {
        if (!auth) return Promise.resolve();
        return signOut(auth);
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
