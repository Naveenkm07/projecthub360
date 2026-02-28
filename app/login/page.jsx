'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Mail, Lock, User, Eye, EyeOff, Zap, Chrome } from 'lucide-react';

export default function LoginPage() {
    const [tab, setTab] = useState('login'); // login | signup
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const [showPw, setShowPw] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login, signup, loginWithGoogle } = useAuth();
    const router = useRouter();

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); setLoading(true);
        try {
            if (tab === 'login') await login(form.email, form.password);
            else await signup(form.email, form.password, form.name);
            router.push('/dashboard');
        } catch (err) {
            setError(err.message.replace('Firebase: ', '').replace(/\(.*\)/, '').trim());
        } finally { setLoading(false); }
    };

    const handleGoogle = async () => {
        setError(''); setLoading(true);
        try {
            await loginWithGoogle();
            router.push('/dashboard');
        } catch (err) { setError(err.message); }
        finally { setLoading(false); }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #070d1b 0%, #0e1a33 100%)' }}>
            {/* Blobs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/8 rounded-full blur-[100px] pointer-events-none" />

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="w-full max-w-md">
                {/* Logo */}
                <div className="text-center mb-8">
                    <Link href="/" className="inline-flex items-center gap-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-blue-600 rounded-xl flex items-center justify-center shadow-glow">
                            <Zap size={20} fill="white" className="text-white" />
                        </div>
                        <span className="font-display font-bold text-xl text-white">Proto<span className="text-gradient">Build</span> Labs</span>
                    </Link>
                </div>

                <div className="glass rounded-3xl p-8 glow-border">
                    {/* Tabs */}
                    <div className="flex bg-white/5 rounded-xl p-1 mb-8">
                        {['login', 'signup'].map((t) => (
                            <button key={t} onClick={() => { setTab(t); setError(''); }}
                                className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 capitalize ${tab === t ? 'bg-gradient-to-r from-primary-500 to-primary-400 text-white shadow-glow-sm' : 'text-slate-400 hover:text-white'
                                    }`}>
                                {t === 'login' ? 'Sign In' : 'Sign Up'}
                            </button>
                        ))}
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.form key={tab} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.2 }} onSubmit={handleSubmit} className="space-y-4">
                            {tab === 'signup' && (
                                <div className="relative">
                                    <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                                    <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required className="input-dark pl-10" />
                                </div>
                            )}
                            <div className="relative">
                                <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                                <input name="email" type="email" placeholder="Email Address" value={form.email} onChange={handleChange} required className="input-dark pl-10" />
                            </div>
                            <div className="relative">
                                <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                                <input name="password" type={showPw ? 'text' : 'password'} placeholder="Password" value={form.password} onChange={handleChange} required minLength={6} className="input-dark pl-10 pr-10" />
                                <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300">
                                    {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
                                </button>
                            </div>

                            {error && <p className="text-red-400 text-xs bg-red-400/5 border border-red-400/20 rounded-lg px-3 py-2">{error}</p>}

                            <button type="submit" disabled={loading}
                                className="w-full btn-glow py-3.5 disabled:opacity-60 flex items-center justify-center gap-2">
                                {loading ? <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Processing...</> : (tab === 'login' ? 'Sign In' : 'Create Account')}
                            </button>
                        </motion.form>
                    </AnimatePresence>

                    <div className="flex items-center gap-3 my-5">
                        <div className="flex-1 h-px bg-white/10" />
                        <span className="text-slate-600 text-xs">or continue with</span>
                        <div className="flex-1 h-px bg-white/10" />
                    </div>

                    <button onClick={handleGoogle} disabled={loading}
                        className="w-full flex items-center justify-center gap-3 py-3 glass-light rounded-xl text-sm font-medium text-white hover:bg-white/15 transition-all duration-300">
                        <Chrome size={17} /> Continue with Google
                    </button>
                </div>

                <p className="text-center text-slate-600 text-xs mt-6">
                    By signing up, you agree to our <Link href="#" className="text-primary-400 hover:underline">Terms of Service</Link>
                </p>
            </motion.div>
        </div>
    );
}
