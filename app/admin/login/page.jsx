'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Mail, Lock, Shield, Eye, EyeOff } from 'lucide-react';

export default function AdminLoginPage() {
    const [form, setForm] = useState({ email: '', password: '' });
    const [showPw, setShowPw] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login, isAdmin } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); setLoading(true);
        try {
            await login(form.email, form.password);
            // isAdmin is derived from email — check after login
            if (form.email !== process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
                setError('Access denied. Admin credentials required.');
                setLoading(false);
                return;
            }
            router.push('/admin/dashboard');
        } catch (err) {
            setError(err.message.replace('Firebase: ', '').replace(/\(.*\)/, '').trim());
        } finally { setLoading(false); }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #070d1b 0%, #0e1a33 100%)' }}>
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(251,191,36,0.3)]">
                        <Shield size={26} className="text-white" />
                    </div>
                    <h1 className="font-display font-bold text-2xl text-white">Admin Portal</h1>
                    <p className="text-slate-500 text-sm mt-1">ProtoBuild Labs — Restricted Access</p>
                </div>

                <div className="glass rounded-3xl p-8" style={{ boxShadow: '0 8px 40px rgba(251,191,36,0.08), inset 0 1px 0 rgba(255,255,255,0.05)' }}>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="relative">
                            <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                            <input name="email" type="email" placeholder="Admin Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="input-dark pl-10 w-full" />
                        </div>
                        <div className="relative">
                            <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                            <input name="password" type={showPw ? 'text' : 'password'} placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required className="input-dark pl-10 pr-10 w-full" />
                            <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300">
                                {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
                            </button>
                        </div>

                        {error && <p className="text-red-400 text-xs bg-red-500/5 border border-red-400/20 rounded-lg px-3 py-2">{error}</p>}

                        <button type="submit" disabled={loading}
                            className="w-full py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-xl hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60">
                            {loading ? <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Verifying...</> : <><Shield size={16} /> Access Dashboard</>}
                        </button>
                    </form>
                </div>

                <div className="text-center mt-6">
                    <Link href="/" className="text-slate-600 text-xs hover:text-primary-400 transition-colors">← Back to Website</Link>
                </div>
            </motion.div>
        </div>
    );
}
