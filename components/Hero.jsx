'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';

const FloatingScene = dynamic(() => import('./FloatingScene'), { ssr: false });

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #070d1b 0%, #0e1a33 50%, #122040 100%)',
            }}
        >
            {/* 3D Canvas */}
            <div className="absolute inset-0 z-0">
                <Suspense fallback={null}>
                    <FloatingScene />
                </Suspense>
            </div>

            {/* Radial glow spots */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/8 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-0 left-0 w-80 h-80 bg-primary-400/8 rounded-full blur-[90px] pointer-events-none" />

            {/* Grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(77,166,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(77,166,255,1) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 flex flex-col items-center text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="section-tag mb-8 gap-2"
                >
                    <Sparkles size={13} />
                    Engineering Project Development Platform
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.7 }}
                    className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-tight max-w-5xl"
                >
                    We Build Engineering{' '}
                    <span className="text-gradient-warm">Projects</span>{' '}
                    That Stand Out
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="mt-6 text-slate-400 text-xl md:text-2xl font-medium max-w-2xl"
                >
                    Major &nbsp;|&nbsp; Mini &nbsp;|&nbsp; Prototype Solutions for Students
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.65, duration: 0.6 }}
                    className="mt-10 flex flex-col sm:flex-row items-center gap-4"
                >
                    <Link href="#contact" className="btn-glow flex items-center gap-2 group animate-pulse-glow">
                        Get Your Project
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link href="/projects" className="btn-outline-glow">
                        Explore Projects
                    </Link>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="mt-20 grid grid-cols-3 gap-8 sm:gap-16"
                >
                    {[
                        { value: '500+', label: 'Projects Delivered' },
                        { value: '50+', label: 'Tech Stacks' },
                        { value: '98%', label: 'Satisfaction Rate' },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <p className="font-display font-black text-3xl sm:text-4xl text-gradient">{stat.value}</p>
                            <p className="text-slate-500 text-sm mt-1.5">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Scroll indicator */}
                <motion.a
                    href="#services"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 hover:text-primary-400 transition-colors"
                >
                    <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
                    <ChevronDown size={18} className="animate-bounce" />
                </motion.a>
            </div>
        </section>
    );
}
