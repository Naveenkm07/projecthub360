'use client';

import { motion } from 'framer-motion';
import { Rocket, Shield, PenTool, Lock, ArrowRight, Activity } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function PrototypeDevPage() {
    const features = [
        { icon: <Rocket size={24} className="text-purple-400" />, title: 'Rapid Iteration', desc: 'Move from idea to working hardware in weeks, not months. Perfect for tight hackathon deadlines.' },
        { icon: <Lock size={24} className="text-emerald-400" />, title: 'Strict NDA Support', desc: 'Your intellectual property remains yours. We sign comprehensive NDAs before discussing your idea.' },
        { icon: <PenTool size={24} className="text-blue-400" />, title: 'Custom 3D Printing', desc: 'We design and 3D-print custom enclosures so your prototype looks like a finished consumer product.' },
        { icon: <Activity size={24} className="text-amber-400" />, title: 'Custom PCB Design', desc: 'Move away from messy breadboards. We design and fabricate custom PCBs for your MVP.' }
    ];

    return (
        <div className="min-h-screen pt-32 pb-0 relative bg-[#070d1b]">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="max-w-6xl mx-auto px-6 relative z-10 mb-24">
                
                {/* Hero */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 font-bold tracking-wider text-sm mb-6 border border-purple-500/20">
                        <Shield size={16} /> Startups & Hackathons
                    </span>
                    <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-7xl text-white mb-6 leading-tight">
                        Bring your startup idea to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">life.</span>
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                        We act as your outsourced hardware engineering team. From breadboard proofs-of-concept to custom PCBs and 3D printed enclosures.
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
                            className="glass p-8 rounded-3xl border border-white/5 hover:-translate-y-1 hover:border-purple-500/30 transition-all group"
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
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10" />
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl font-display font-bold text-white mb-6">Ready to build your MVP?</h2>
                        <p className="text-slate-400 text-lg mb-10">
                            Schedule a free 30-minute consultation with our lead engineers to discuss architecture, timelines, and costs.
                        </p>
                        <Link href="/contact" className="inline-flex bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-[0_0_20px_rgba(147,51,234,0.4)] items-center justify-center gap-2 text-lg">
                            Schedule Consultation <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>

            </div>
            
            <Footer />
        </div>
    );
}
