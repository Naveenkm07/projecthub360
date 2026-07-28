'use client';

import { motion } from 'framer-motion';
import { Target, Users, Zap, Shield, Cpu, Code2 } from 'lucide-react';
import Footer from '@/components/Footer';

export default function AboutUsPage() {
    const stats = [
        { label: 'Projects Delivered', value: '500+' },
        { label: 'Students Helped', value: '10k+' },
        { label: 'Universities Reached', value: '120+' },
        { label: 'Hardware Modules', value: '50+' },
    ];

    const values = [
        { icon: <Target className="text-primary-400" size={32} />, title: 'Mission-Driven', desc: 'We believe practical engineering should be accessible to everyone, not just those with fully-equipped labs.' },
        { icon: <Shield className="text-emerald-400" size={32} />, title: 'Quality First', desc: 'Every project is rigorously tested. We don\'t ship until we are absolutely certain it works flawlessly.' },
        { icon: <Users className="text-blue-400" size={32} />, title: 'Student-Centric', desc: 'Our documentation, code comments, and support are tailored specifically to help students learn and ace their vivas.' },
        { icon: <Zap className="text-amber-400" size={32} />, title: 'Innovation', desc: 'We constantly update our tech stacks, moving from outdated PHP to Next.js, and from old 8051s to powerful ESP32s.' },
    ];

    return (
        <div className="min-h-screen pt-32 pb-0 relative bg-[#070d1b]">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-900/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="max-w-6xl mx-auto px-6 relative z-10 mb-24">
                
                {/* Hero */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-primary-400 font-bold tracking-wider uppercase text-sm mb-4 block">About Us</span>
                    <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                        Bridging the gap between <span className="text-primary-400">theory</span> and <span className="text-blue-400">reality.</span>
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
                        ProtoBuild Labs was founded by a team of passionate engineers who realized that the hardest part of engineering wasn't the theory—it was finding the right hardware and guidance to build real things.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
                    {stats.map((stat, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass p-8 rounded-3xl border border-white/5 text-center flex flex-col justify-center items-center hover:border-primary-500/30 transition-all"
                        >
                            <h3 className="font-display font-bold text-4xl md:text-5xl text-white mb-2">{stat.value}</h3>
                            <p className="text-slate-400 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Story Section */}
                <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                    <div>
                        <h2 className="text-3xl font-display font-bold text-white mb-6">Our Story</h2>
                        <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
                            <p>
                                It started in a crowded college dorm room. We were trying to build a self-balancing robot for our final year project, but we spent 80% of our time debugging faulty sensors we bought online and configuring mismatched libraries.
                            </p>
                            <p>
                                We realized that millions of engineering students face this exact same hurdle every year. The brilliant ideas are there, but the execution is stalled by supply chain issues, lack of mentorship, and overwhelming complexity.
                            </p>
                            <p>
                                That's why we built <strong className="text-white font-semibold">ProtoBuild Labs</strong>. We do the heavy lifting of testing hardware, writing robust boilerplate code, and creating comprehensive documentation so that you can focus on learning, customizing, and presenting your project with pride.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="w-full h-[500px] rounded-3xl bg-gradient-to-br from-primary-900/40 to-blue-900/40 border border-white/10 relative overflow-hidden shadow-2xl flex items-center justify-center">
                            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
                            <div className="grid grid-cols-2 gap-4 p-8 w-full h-full">
                                <div className="bg-white/5 rounded-2xl flex items-center justify-center border border-white/10"><Cpu size={48} className="text-primary-500/50" /></div>
                                <div className="bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 mt-8 mb-[-32px]"><Code2 size={48} className="text-blue-500/50" /></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-display font-bold text-white mb-4">Our Core Values</h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">The principles that guide everything we build and every student we help.</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass p-8 rounded-3xl border border-white/5 hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                {value.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}
