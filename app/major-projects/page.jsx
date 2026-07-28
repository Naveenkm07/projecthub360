'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, GraduationCap, FileText, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function MajorProjectsPage() {
    const features = [
        { icon: <FileText size={24} className="text-blue-400" />, title: 'IEEE Base Papers', desc: 'All major projects are built upon the latest 2024-2025 IEEE base papers to ensure academic rigor.' },
        { icon: <ShieldCheck size={24} className="text-emerald-400" />, title: 'Plagiarism-Free Code', desc: 'We write 100% custom, original source code. No copied GitHub repositories.' },
        { icon: <GraduationCap size={24} className="text-purple-400" />, title: 'Viva Preparation', desc: 'Includes a dedicated 1-on-1 session with our engineers to prepare you for the final presentation.' },
        { icon: <Zap size={24} className="text-amber-400" />, title: 'Complete Documentation', desc: 'Receive ready-to-submit project reports, PPTs, and architecture diagrams.' }
    ];

    return (
        <div className="min-h-screen pt-32 pb-0 relative bg-[#070d1b]">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-900/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="max-w-6xl mx-auto px-6 relative z-10 mb-24">
                
                {/* Hero */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 font-bold tracking-wider text-sm mb-6 border border-primary-500/20">
                        <GraduationCap size={16} /> Final Year Students
                    </span>
                    <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-7xl text-white mb-6 leading-tight">
                        Ace your final year with a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-400">Major Project.</span>
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                        Don't let a faulty sensor or spaghetti code ruin your final grade. We build, test, and explain complex IEEE projects so you can present with confidence.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-20">
                    {features.map((feature, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass p-8 rounded-3xl border border-white/5 hover:-translate-y-1 hover:border-primary-500/30 transition-all group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed text-lg">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* What's Included */}
                <div className="glass p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden mb-24">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-900/20 rounded-full blur-[100px] pointer-events-none" />
                    
                    <h2 className="text-3xl font-display font-bold text-white mb-8">What's included in the package?</h2>
                    
                    <div className="grid md:grid-cols-2 gap-y-4 gap-x-8 mb-12">
                        {[
                            'Fully Assembled Hardware Prototype',
                            '100% Original Source Code',
                            '100+ Page Project Report (IEEE Format)',
                            'Presentation PPT Slides',
                            'Base Paper & References',
                            'Circuit & Block Diagrams',
                            'Step-by-Step Execution Video',
                            '1-Hour Viva Training Session'
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <CheckCircle2 size={20} className="text-primary-400 shrink-0" />
                                <span className="text-slate-300 font-medium">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/projects" className="bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-glow flex items-center justify-center gap-2 text-lg">
                            Browse Major Projects <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>

            </div>
            
            <Footer />
        </div>
    );
}
