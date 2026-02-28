import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'bg-white/70 backdrop-blur-xl shadow-lg shadow-blue-100/50 border-b border-white/60'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group">
                    <div className="w-9 h-9 bg-gradient-to-br from-primary-400 to-blue-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                        <Zap size={18} className="text-white" fill="white" />
                    </div>
                    <span className="font-display font-bold text-xl text-gray-800">
                        Proto<span className="text-gradient">Build</span>
                        <span className="text-gray-500 font-medium"> Labs</span>
                    </span>
                </a>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                className="text-gray-600 font-medium hover:text-primary-500 transition-colors duration-300 relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 rounded-full group-hover:w-full transition-all duration-300" />
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <div className="hidden md:block">
                    <a
                        href="#contact"
                        className="btn-primary text-sm py-2.5 px-6 inline-block"
                    >
                        Get Your Project
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 rounded-xl bg-white/60 backdrop-blur-md shadow-sm border border-white/40"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden overflow-hidden bg-white/90 backdrop-blur-xl border-t border-white/60"
                    >
                        <div className="px-6 py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-gray-700 font-medium py-2 hover:text-primary-500 transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setMenuOpen(false)}
                                className="btn-primary text-sm text-center py-3 px-6 inline-block"
                            >
                                Get Your Project
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
