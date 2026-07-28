'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Code2, Cpu, Truck, CheckCircle2, MessageSquare, Zap, Target } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function HowItWorksPage() {
    const [activeTab, setActiveTab] = useState('Standard');

    const standardSteps = [
        {
            icon: <Lightbulb size={24} />,
            title: 'Browse & Select',
            desc: 'Explore our catalog of 100+ projects across IoT, Machine Learning, Web Apps, and Robotics. Find the perfect fit for your academic requirements.',
        },
        {
            icon: <CheckCircle2 size={24} />,
            title: 'Place Order',
            desc: 'Securely checkout using Razorpay. All our standard projects are priced affordably between ₹2,500 and ₹3,500.',
        },
        {
            icon: <Truck size={24} />,
            title: 'Assembly & Dispatch',
            desc: 'Our engineers immediately begin assembling your hardware (if applicable). Your project is dispatched within 2-3 business days.',
        },
        {
            icon: <Cpu size={24} />,
            title: 'Receive & Learn',
            desc: 'Receive the fully working project, complete source code, IEEE reports, and setup videos. Learn how it works step-by-step.',
        }
    ];

    const customSteps = [
        {
            icon: <MessageSquare size={24} />,
            title: 'Initial Consultation',
            desc: 'Chat with our engineering team. Share your base paper, university guidelines, and specific technical requirements.',
        },
        {
            icon: <Target size={24} />,
            title: 'Architecture & Quote',
            desc: 'We design a custom system architecture and provide a transparent, fixed-price quote with a guaranteed delivery timeline.',
        },
        {
            icon: <Code2 size={24} />,
            title: 'Custom Development',
            desc: 'Our experts build your project from scratch. We provide weekly video updates so you can track the progress of your build.',
        },
        {
            icon: <Zap size={24} />,
            title: 'Testing & Handover',
            desc: 'Rigorous testing is performed. We then deliver the project along with a dedicated 1-on-1 code explanation session via Google Meet.',
        }
    ];

    const currentSteps = activeTab === 'Standard' ? standardSteps : customSteps;

    return (
        <div className="min-h-screen pt-32 pb-0 relative" style={{ background: '#070d1b' }}>
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-900/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="max-w-6xl mx-auto px-6 relative z-10 mb-24">
                {/* Hero */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-primary-400 font-bold tracking-wider uppercase text-sm mb-4 block">The Process</span>
                    <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                        How It <span className="text-primary-400">Works</span>
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
                        Whether you need a quick standard project or a highly complex custom build, our process is designed to be transparent, fast, and educational.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-16">
                    <div className="glass p-1 rounded-2xl flex border border-white/10">
                        <button 
                            onClick={() => setActiveTab('Standard')}
                            className={\`px-8 py-3 rounded-xl font-medium transition-all duration-300 \${activeTab === 'Standard' ? 'bg-primary-500 text-white shadow-glow-sm' : 'text-slate-400 hover:text-white'}\`}
                        >
                            Standard Projects
                        </button>
                        <button 
                            onClick={() => setActiveTab('Custom')}
                            className={\`px-8 py-3 rounded-xl font-medium transition-all duration-300 \${activeTab === 'Custom' ? 'bg-primary-500 text-white shadow-glow-sm' : 'text-slate-400 hover:text-white'}\`}
                        >
                            Custom Builds
                        </button>
                    </div>
                </div>

                {/* Timeline Component */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical line connecting steps */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500/0 via-primary-500/20 to-primary-500/0 hidden md:block" />
                    
                    <div className="space-y-12 relative">
                        {currentSteps.map((step, idx) => {
                            const isEven = idx % 2 === 0;
                            return (
                                <motion.div 
                                    key={\`\${activeTab}-\${idx}\`}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                                    className={\`flex flex-col md:flex-row items-center gap-8 \${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}\`}
                                >
                                    {/* Desktop Timeline content (Left or Right) */}
                                    <div className={\`flex-1 w-full md:w-auto \${isEven ? 'md:text-right md:pr-12' : 'md:pl-12'}\`}>
                                        <div className={\`glass p-8 rounded-3xl border border-white/5 hover:border-primary-500/30 transition-all group \${isEven ? 'hover:-translate-x-2' : 'hover:translate-x-2'}\`}>
                                            <span className="text-primary-500 font-display font-bold text-xl mb-2 block opacity-50">Step 0{idx + 1}</span>
                                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">{step.title}</h3>
                                            <p className="text-slate-400 leading-relaxed">{step.desc}</p>
                                        </div>
                                    </div>

                                    {/* Center Icon (Desktop) */}
                                    <div className="hidden md:flex relative z-10 w-16 h-16 rounded-full bg-[#070d1b] border-2 border-primary-500 items-center justify-center text-primary-400 shadow-[0_0_15px_rgba(59,130,246,0.3)] shrink-0">
                                        {step.icon}
                                    </div>

                                    {/* Empty flex space for alignment */}
                                    <div className="hidden md:block flex-1" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="border-t border-white/5 bg-[#0a1225] py-24 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to ace your final year project?</h2>
                    <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                        Stop stressing over bugs and hardware failures. Let our engineers help you deliver a flawless project.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/projects" className="bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-glow flex items-center justify-center gap-2">
                            Browse Catalog
                        </Link>
                        <Link href="/contact" className="glass hover:bg-white/10 text-white px-8 py-4 rounded-xl font-medium transition-all border border-white/10 flex items-center justify-center gap-2">
                            Request Custom Build
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
