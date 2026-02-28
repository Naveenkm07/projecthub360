'use client';

import Link from 'next/link';
import { Zap, Github, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const links = {
    Services: ['Major Projects', 'Mini Projects', 'Prototype Dev', 'Custom Build'],
    Resources: ['How It Works', 'Pricing', 'FAQ', 'Blog'],
    Company: ['About Us', 'Portfolio', 'Careers', 'Contact'],
};
const socials = [
    { icon: Github, href: '#' }, { icon: Twitter, href: '#' },
    { icon: Linkedin, href: '#' }, { icon: Instagram, href: '#' },
];

export default function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-white/5"
            style={{ background: 'linear-gradient(180deg, #0e1a33 0%, #070d1b 100%)' }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary-400/40 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-9 h-9 bg-gradient-to-br from-primary-400 to-blue-600 rounded-xl flex items-center justify-center shadow-glow-sm">
                                <Zap size={18} fill="white" className="text-white" />
                            </div>
                            <span className="font-display font-bold text-xl text-white">
                                Proto<span className="text-gradient">Build</span>
                                <span className="text-slate-500 font-medium text-base"> Labs</span>
                            </span>
                        </Link>
                        <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-6">
                            Your trusted partner for engineering project development. Built for students who want to stand out.
                        </p>
                        <div className="space-y-2.5 mb-6">
                            {[{ icon: Mail, t: 'hello@protobuildlabs.in' }, { icon: Phone, t: '+91 98765 43210' }, { icon: MapPin, t: 'Chennai, Tamil Nadu, India' }]
                                .map(({ icon: Icon, t }) => (
                                    <div key={t} className="flex items-center gap-2.5">
                                        <Icon size={13} className="text-primary-400 flex-shrink-0" />
                                        <span className="text-slate-500 text-sm">{t}</span>
                                    </div>
                                ))}
                        </div>
                        <div className="flex gap-2">
                            {socials.map(({ icon: Icon, href }, i) => (
                                <a key={i} href={href} className="w-9 h-9 glass rounded-xl flex items-center justify-center hover:bg-primary-400/20 hover:border-primary-400/30 transition-all">
                                    <Icon size={15} className="text-slate-400" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(links).map(([heading, items]) => (
                        <div key={heading}>
                            <h4 className="font-display font-semibold text-white text-sm mb-4">{heading}</h4>
                            <ul className="space-y-2.5">
                                {items.map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-slate-500 text-sm hover:text-primary-400 transition-colors">{item}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="h-px bg-white/5 mb-6" />
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-slate-600 text-xs">© 2025 ProtoBuild Labs. All rights reserved. Built with ❤️ for engineering students.</p>
                    <div className="flex gap-5">
                        {['Privacy Policy', 'Terms', 'Refunds'].map((l) => (
                            <Link key={l} href="#" className="text-slate-600 text-xs hover:text-primary-400 transition-colors">{l}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
