'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Star, Code } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function PortfolioPage() {
    const caseStudies = [
        {
            id: 1,
            title: 'Autonomous Drone Navigation System',
            university: 'IIT Madras',
            award: '1st Place - TechFest 2024',
            description: 'A completely custom-built autonomous drone capable of indoor navigation without GPS, utilizing optical flow sensors and a Raspberry Pi for onboard processing.',
            tags: ['Python', 'OpenCV', 'Raspberry Pi', 'Pixhawk'],
            gradient: 'from-blue-600 to-cyan-400'
        },
        {
            id: 2,
            title: 'AI-Powered Smart Diagnostic Mirror',
            university: 'NIT Trichy',
            award: 'Best Major Project - CS Dept',
            description: 'A two-way mirror integrated with a camera and an edge AI model that detects early signs of skin diseases and provides real-time health metrics.',
            tags: ['TensorFlow', 'React', 'Node.js', 'ESP32-CAM'],
            gradient: 'from-purple-600 to-pink-500'
        },
        {
            id: 3,
            title: 'Decentralized Voting DApp',
            university: 'VIT Vellore',
            award: 'Top 10 Finalist - HackIndia',
            description: 'A secure, anonymous voting platform built on the Ethereum blockchain utilizing smart contracts to prevent voter fraud during college elections.',
            tags: ['Solidity', 'Next.js', 'Web3.js', 'Tailwind'],
            gradient: 'from-emerald-500 to-teal-400'
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-0 relative bg-[#070d1b]">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-900/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="max-w-6xl mx-auto px-6 relative z-10 mb-24">
                
                {/* Hero */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-primary-400 font-bold tracking-wider uppercase text-sm mb-4 block">Portfolio</span>
                    <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                        Case Studies of <span className="text-primary-400">Excellence.</span>
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
                        Explore some of the most complex, award-winning custom projects we've built for engineering students across the country.
                    </p>
                </div>

                {/* Case Studies */}
                <div className="space-y-12 mb-24">
                    {caseStudies.map((study, i) => (
                        <motion.div 
                            key={study.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass rounded-3xl overflow-hidden border border-white/5 hover:border-primary-500/30 transition-all grid lg:grid-cols-2 gap-0 group"
                        >
                            <div className={\`h-64 lg:h-full min-h-[300px] bg-gradient-to-br \${study.gradient} relative overflow-hidden\`}>
                                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                                
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="glass bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-white font-medium">
                                            <Trophy size={18} className="text-amber-400" /> {study.award}
                                        </div>
                                        <div className="text-white/70 text-sm font-medium">{study.university}</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <h2 className="text-3xl font-display font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                                    {study.title}
                                </h2>
                                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                    {study.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {study.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-slate-300 text-sm font-medium flex items-center gap-1.5">
                                            <Code size={14} className="opacity-50" /> {tag}
                                        </span>
                                    ))}
                                </div>
                                
                                <div>
                                    <Link href="/contact" className="inline-flex items-center gap-2 text-primary-400 font-semibold hover:gap-3 transition-all">
                                        Request a similar build <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Testimonial */}
                <div className="glass p-8 md:p-12 rounded-3xl border border-white/5 text-center max-w-4xl mx-auto relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent" />
                    <div className="flex justify-center gap-1 mb-6">
                        {[1, 2, 3, 4, 5].map(star => <Star key={star} size={24} className="text-amber-400 fill-amber-400" />)}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-6 leading-relaxed">
                        "The team at ProtoBuild Labs didn't just build my project—they explained every line of code to me. I was able to confidently answer every single viva question and scored a perfect 100/100."
                    </h3>
                    <div>
                        <p className="text-white font-bold text-lg">Siddharth R.</p>
                        <p className="text-slate-400">Final Year B.Tech, Computer Science</p>
                    </div>
                </div>

            </div>
            
            <Footer />
        </div>
    );
}
