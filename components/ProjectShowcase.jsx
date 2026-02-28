'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

const featured = [
    { title: 'Smart Attendance System', cat: 'IoT / Computer Vision', desc: 'Facial recognition attendance with Raspberry Pi, OpenCV, and web dashboard.', tags: ['Python', 'OpenCV', 'RPi', 'Flask', 'SQLite'], emoji: '🎯', color: 'from-primary-500 to-blue-600' },
    { title: 'Crop Disease Detection', cat: 'Machine Learning', desc: 'CNN model detecting crop diseases from leaf images with 94% accuracy.', tags: ['TensorFlow', 'Python', 'Flutter', 'FastAPI'], emoji: '🌱', color: 'from-indigo-500 to-primary-400' },
    { title: 'Smart Irrigation System', cat: 'IoT / Embedded', desc: 'Arduino-based irrigation using soil sensors with real-time cloud monitoring.', tags: ['Arduino', 'C++', 'MQTT', 'Firebase'], emoji: '💧', color: 'from-blue-500 to-cyan-400' },
];

export default function ProjectShowcase() {
    return (
        <section id="projects" className="py-28 relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #0a1225 0%, #070d1b 100%)' }}>
            <div className="max-w-7xl mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
                    <div className="section-tag mb-5">Portfolio</div>
                    <h2 className="section-heading">Featured <span className="text-gradient">Projects</span></h2>
                    <p className="section-sub">A sample of innovative engineering projects we've delivered.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    {featured.map((p, i) => (
                        <motion.div key={p.title}
                            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }} whileHover={{ y: -8 }}
                            className="group glass rounded-2xl overflow-hidden cursor-pointer">
                            <div className={`h-36 bg-gradient-to-br ${p.color} relative flex items-center justify-center overflow-hidden`}>
                                <span className="text-5xl drop-shadow-lg">{p.emoji}</span>
                                <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/10 rounded-full" />
                                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/10 rounded-full" />
                            </div>
                            <div className="p-6">
                                <span className="tech-tag mb-3 inline-block text-xs">{p.cat}</span>
                                <h3 className="font-display font-bold text-white text-base mb-2 group-hover:text-primary-400 transition-colors">{p.title}</h3>
                                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{p.desc}</p>
                                <div className="flex flex-wrap gap-1.5 mb-4">{p.tags.map((t) => <span key={t} className="px-2 py-0.5 bg-white/5 text-slate-400 text-xs rounded-md">{t}</span>)}</div>
                                <Link href="#contact" className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-400 hover:gap-2.5 transition-all">Request Similar <ExternalLink size={12} /></Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <Link href="/projects" className="btn-outline-glow inline-block">View All Projects →</Link>
                </div>
            </div>
        </section>
    );
}
