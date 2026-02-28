'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, User, LogOut, LayoutDashboard, Shield } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

const navLinks = [
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/#why-us' },
    { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const pathname = usePathname();
    const { user, isAdmin, logout } = useAuth();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'bg-dark-900/80 backdrop-blur-2xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-9 h-9 bg-gradient-to-br from-primary-400 to-blue-600 rounded-xl flex items-center justify-center shadow-glow-sm group-hover:shadow-glow transition-all duration-300">
                        <Zap size={18} className="text-white" fill="white" />
                    </div>
                    <span className="font-display font-bold text-xl text-white">
                        Proto<span className="text-gradient">Build</span>
                        <span className="text-slate-400 font-medium text-base"> Labs</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-7">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <Link
                                href={link.href}
                                className={`text-sm font-medium transition-colors duration-300 relative group ${pathname === link.href ? 'text-primary-400' : 'text-slate-400 hover:text-white'
                                    }`}
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary-400 group-hover:w-full transition-all duration-300" />
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop Auth */}
                <div className="hidden md:flex items-center gap-3">
                    {user ? (
                        <div className="relative">
                            <button
                                onClick={() => setUserMenuOpen(!userMenuOpen)}
                                className="flex items-center gap-2 px-4 py-2 glass rounded-full hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary-400 to-blue-500 flex items-center justify-center text-xs font-bold text-white">
                                    {user.displayName?.[0]?.toUpperCase() || user.email?.[0]?.toUpperCase()}
                                </div>
                                <span className="text-sm text-slate-300 max-w-[100px] truncate">
                                    {user.displayName || 'Account'}
                                </span>
                            </button>

                            <AnimatePresence>
                                {userMenuOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                                        transition={{ duration: 0.18 }}
                                        className="absolute right-0 mt-2 w-52 glass rounded-xl overflow-hidden shadow-card border border-white/10"
                                    >
                                        {isAdmin && (
                                            <Link
                                                href="/admin/dashboard"
                                                onClick={() => setUserMenuOpen(false)}
                                                className="flex items-center gap-3 px-4 py-3 text-sm text-yellow-400 hover:bg-white/5 transition-colors"
                                            >
                                                <Shield size={15} /> Admin Dashboard
                                            </Link>
                                        )}
                                        <Link
                                            href="/dashboard"
                                            onClick={() => setUserMenuOpen(false)}
                                            className="flex items-center gap-3 px-4 py-3 text-sm text-slate-300 hover:bg-white/5 transition-colors"
                                        >
                                            <LayoutDashboard size={15} /> My Dashboard
                                        </Link>
                                        <button
                                            onClick={() => { logout(); setUserMenuOpen(false); }}
                                            className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-400 hover:bg-white/5 transition-colors"
                                        >
                                            <LogOut size={15} /> Sign Out
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ) : (
                        <>
                            <Link href="/login" className="btn-outline-glow text-sm py-2.5 px-6">
                                Sign In
                            </Link>
                            <Link href="/#contact" className="btn-sm">
                                Get Project
                            </Link>
                        </>
                    )}
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden p-2 glass rounded-xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={20} className="text-white" /> : <Menu size={20} className="text-slate-300" />}
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28 }}
                        className="md:hidden overflow-hidden bg-dark-800/95 backdrop-blur-2xl border-t border-white/5"
                    >
                        <div className="px-6 py-5 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-slate-300 font-medium py-2 hover:text-primary-400 transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="border-t border-white/10 pt-4 flex flex-col gap-3">
                                {user ? (
                                    <>
                                        <Link href="/dashboard" onClick={() => setMenuOpen(false)} className="btn-outline-glow text-sm text-center py-3">Dashboard</Link>
                                        <button onClick={() => { logout(); setMenuOpen(false); }} className="text-red-400 text-sm font-medium">Sign Out</button>
                                    </>
                                ) : (
                                    <>
                                        <Link href="/login" onClick={() => setMenuOpen(false)} className="btn-outline-glow text-sm text-center py-3">Sign In</Link>
                                        <Link href="/#contact" onClick={() => setMenuOpen(false)} className="btn-glow text-sm text-center py-3">Get Project</Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
