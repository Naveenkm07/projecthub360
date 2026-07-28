'use client';

import { motion } from 'framer-motion';
import { Battery, Code, Zap, Clock, PackageCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function MiniProjectsPage() {
    const features = [
        { icon: <Clock size={24} className="text-emerald-400" />, title: '24-48 Hour Delivery', desc: 'Need it urgently? Most of our standard mini projects are shipped within 24 hours.' },
        { icon: <Zap size={24} className="text-amber-400" />, title: 'Affordable Pricing', desc: 'All standard mini projects are priced strictly under ₹3,500 to fit your student budget.' },
        { icon: <Code size={24} className="text-blue-400" />, title: 'Clean Source Code', desc: 'Well-commented, easy to understand code designed specifically for learning.' },
        { icon: <Battery size={24} className="text-purple-400" />, title: 'Plug & Play', desc: 'Hardware projects come pre-flashed and pre-assembled. Just plug in the power and it works.' }
    ];

    return (
        <div className="min-h-screen pt-32 pb-0 relative bg-[#070d1b]">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="max-w-6xl mx-auto px-6 relative z-10 mb-24">
                
                {/* Hero */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-bold tracking-wider text-sm mb-6 border border-emerald-500/20">
                        <PackageCheck size={16} /> 2nd & 3rd Year Students
                    </span>
                    <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-7xl text-white mb-6 leading-tight">
                        Learn the basics with a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Mini Project.</span>
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                        Perfect for semester submissions and lab exams. We provide working prototypes that help you understand the fundamentals of IoT, ML, and Web Dev.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-24">
                    {features.map((feature, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass p-8 rounded-3xl border border-white/5 hover:-translate-y-1 hover:border-emerald-500/30 transition-all group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed text-lg">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <div className="glass p-12 rounded-3xl border border-white/5 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-teal-600/10" />
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl font-display font-bold text-white mb-6">Explore our catalog of 100+ projects</h2>
                        <p className="text-slate-400 text-lg mb-10">
                            We have projects covering Arduino, Raspberry Pi, ESP32, Python, React, and more. Find the perfect fit for your academic requirements today.
                        </p>
                        <Link href="/projects" className="inline-flex bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] items-center justify-center gap-2 text-lg">
                            Browse Mini Projects <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>

            </div>
            
            <Footer />
        </div>
    );
}
