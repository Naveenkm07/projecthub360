'use client';

import { useParams, notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, ShieldCheck, Zap, ShoppingCart, Code2, Cpu } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { projects } from '@/lib/projectsData';

export default function ProjectDetailPage() {
    const params = useParams();
    const id = params?.id;
    
    // Find the project based on the dynamic ID route
    const project = projects.find(p => p.id === id);

    if (!project) {
        return notFound();
    }

    const whatsIncluded = [
        'Complete Source Code (100% Original)',
        'IEEE Format Project Report (100+ pages)',
        'Detailed PPT for Presentation',
        'Circuit Diagram & Architecture Flow',
        'Step-by-step Setup Video Guide',
        'Base Paper Reference (2024/2025)'
    ];

    return (
        <div className="min-h-screen pt-32 pb-0 relative bg-[#070d1b]">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-900/10 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="max-w-6xl mx-auto px-6 relative z-10 mb-24">
                
                {/* Back Link */}
                <Link href="/projects" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12">
                    <ArrowLeft size={16} /> Back to Projects
                </Link>

                <div className="grid lg:grid-cols-3 gap-12">
                    
                    {/* Left Column: Project Details */}
                    <div className="lg:col-span-2">
                        <div className="glass p-8 md:p-12 rounded-3xl border border-white/5 mb-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-600/40 to-blue-900/40 flex items-center justify-center text-3xl shadow-inner border border-white/10">
                                    {project.emoji || '📁'}
                                </div>
                                <div>
                                    <span className="px-3 py-1 bg-white/5 text-slate-300 text-xs font-semibold rounded-md uppercase tracking-wider">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            <h1 className="font-display font-bold text-3xl md:text-5xl text-white mb-6">
                                {project.title}
                            </h1>
                            
                            <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                {project.description}
                                <br/><br/>
                                This project is designed specifically for final year engineering submissions. It comes complete with all necessary documentation, diagrams, and a clean, fully-commented codebase to ensure you score top marks in your evaluation.
                            </p>

                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <Code2 size={20} className="text-primary-400" /> Technology Stack
                            </h3>
                            <div className="flex flex-wrap gap-2 mb-10">
                                {project.tags?.map((tag) => (
                                    <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 text-slate-300 rounded-xl text-sm font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <Cpu size={20} className="text-emerald-400" /> What's Included?
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {whatsIncluded.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle2 size={18} className="text-emerald-400 mt-0.5 shrink-0" />
                                        <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Checkout Card */}
                    <div className="lg:col-span-1">
                        <div className="glass p-8 rounded-3xl border border-white/5 sticky top-32 shadow-2xl">
                            <h2 className="text-2xl font-bold text-white mb-2">Purchase Project</h2>
                            <p className="text-slate-400 text-sm mb-6">Instant access to source code and documentation.</p>
                            
                            <div className="text-4xl font-bold text-white mb-8">
                                ₹{project.price?.toLocaleString()}
                                <span className="text-sm font-medium text-slate-500 ml-2">incl. GST</span>
                            </div>

                            <Link href={`/checkout/${project.id}`} className="w-full bg-primary-600 hover:bg-primary-500 text-white py-4 rounded-xl font-bold transition-all shadow-glow flex items-center justify-center gap-2 mb-4 text-lg">
                                <ShoppingCart size={20} /> Buy Now
                            </Link>

                            <div className="space-y-3 mt-6 pt-6 border-t border-white/10">
                                <div className="flex items-center gap-2 text-slate-400 text-sm">
                                    <ShieldCheck size={16} className="text-emerald-400" /> 100% Secure Checkout
                                </div>
                                <div className="flex items-center gap-2 text-slate-400 text-sm">
                                    <Zap size={16} className="text-amber-400" /> Instant Download Delivery
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
            <Footer />
        </div>
    );
}
