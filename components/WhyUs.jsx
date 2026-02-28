'use client';

import { motion } from 'framer-motion';
import { FileCode2, BookOpen, HeadphonesIcon, Wrench, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const features = [
    { icon: FileCode2, title: 'Source Code Included', desc: 'Complete, commented source code. Understand every line.', color: 'from-primary-400 to-blue-500' },
    { icon: BookOpen, title: 'Documentation + PPT', desc: 'IEEE-format report and polished presentation slides.', color: 'from-blue-500 to-cyan-400' },
    { icon: HeadphonesIcon, title: 'Technical Support', desc: 'Our engineers guide you through viva and review sessions.', color: 'from-indigo-400 to-primary-400' },
    { icon: Wrench, title: 'Custom Development', desc: 'Unique ideas built from scratch per your requirements.', color: 'from-primary-500 to-indigo-500' },
];

export default function WhyUs() {
    return (
        <section id="why-us" className="py-28 relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #070d1b 0%, #0a1225 100%)' }}>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-900/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/15 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65 }}
                    >
                        <div className="section-tag mb-5">Why ProtoBuild Labs</div>
                        <h2 className="section-heading mb-6">
                            Everything You Need to <span className="text-gradient">Succeed</span>
                        </h2>
                        <p className="text-slate-400 leading-relaxed mb-8">
                            We don't just deliver code — we provide the entire package to help you understand,
                            present, and ace your evaluations. Trusted by 1000+ students.
                        </p>
                        <ul className="space-y-3 mb-10">
                            {['On-time delivery guaranteed', 'Plagiarism-free, original work', 'Multiple revision rounds', 'WhatsApp support throughout'].map((item) => (
                                <li key={item} className="flex items-center gap-3">
                                    <CheckCircle2 size={17} className="text-primary-400 flex-shrink-0" />
                                    <span className="text-slate-300 text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link href="#contact" className="btn-glow inline-flex items-center gap-2">Start Your Project</Link>
                    </motion.div>

                    {/* Right grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {features.map((f, i) => {
                            const Icon = f.icon;
                            return (
                                <motion.div
                                    key={f.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    whileHover={{ y: -6 }}
                                    className="group glass rounded-2xl p-6 cursor-default"
                                >
                                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4 group-hover:shadow-glow-sm transition-all duration-300`}>
                                        <Icon size={20} className="text-white" />
                                    </div>
                                    <h3 className="font-display font-bold text-white mb-2 text-base">{f.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
