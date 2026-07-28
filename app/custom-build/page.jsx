'use client';

import { motion } from 'framer-motion';
import { PenTool, Laptop2, Workflow, ArrowRight, Settings, PhoneCall } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function CustomBuildPage() {
    const steps = [
        { icon: <PhoneCall size={24} className="text-blue-400" />, title: '1. Discovery Call', desc: 'We jump on a call to understand your exact requirements, constraints, and base paper details.' },
        { icon: <Workflow size={24} className="text-amber-400" />, title: '2. System Architecture', desc: 'Our engineers design the block diagrams, select the components, and provide a fixed quote.' },
        { icon: <Laptop2 size={24} className="text-emerald-400" />, title: '3. Development', desc: 'We build the hardware and software. You get weekly video updates on our progress.' },
        { icon: <Settings size={24} className="text-purple-400" />, title: '4. Testing & Delivery', desc: 'Rigorous testing is performed. We ship the project and schedule a code explanation session.' }
    ];

    return (
        <div className="min-h-screen pt-32 pb-0 relative bg-[#070d1b]">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="max-w-6xl mx-auto px-6 relative z-10 mb-24">
                
                {/* Hero */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 font-bold tracking-wider text-sm mb-6 border border-amber-500/20">
                        <PenTool size={16} /> Bespoke Engineering
                    </span>
                    <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-7xl text-white mb-6 leading-tight">
                        Your idea, <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">custom built.</span>
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                        Don't see what you need in our catalog? No problem. We can build entirely custom projects from scratch based on your specific university guidelines.
                    </p>
                </div>

                {/* The Process */}
                <div className="mb-24">
                    <h2 className="text-3xl font-display font-bold text-white mb-12 text-center">How Custom Builds Work</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {steps.map((step, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass p-8 rounded-3xl border border-white/5 relative"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-slate-400 leading-relaxed text-sm">{step.desc}</p>
                                
                                {/* Connector Line (Desktop) */}
                                {i < 3 && (
                                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-white/10" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="glass p-12 rounded-3xl border border-white/5 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 to-orange-600/10" />
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl font-display font-bold text-white mb-6">Let's discuss your project</h2>
                        <p className="text-slate-400 text-lg mb-10">
                            Fill out our contact form with a brief description of what you want to build. We'll get back to you within 24 hours with a feasibility check.
                        </p>
                        <Link href="/contact" className="inline-flex bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-[0_0_20px_rgba(217,119,6,0.4)] items-center justify-center gap-2 text-lg">
                            Request Custom Quote <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>

            </div>
            
            <Footer />
        </div>
    );
}
