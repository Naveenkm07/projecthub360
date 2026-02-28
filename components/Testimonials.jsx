'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    { name: 'Rahul Sharma', college: 'Anna University, Chennai', branch: 'CSE Final Year', text: 'ProtoBuild Labs delivered my facial recognition attendance system in 5 days. Code quality was excellent and the technical explanation helped me clear my viva with top marks!', rating: 5, avatar: 'RS', color: 'from-primary-400 to-blue-600' },
    { name: 'Priya Nair', college: 'BITS Pilani', branch: 'ECE Final Year', text: 'I needed an IoT soil monitoring system. The team understood my exact requirements and delivered with full documentation. Got an A grade!', rating: 5, avatar: 'PN', color: 'from-cyan-400 to-blue-500' },
    { name: 'Arjun Mehta', college: 'VIT University', branch: 'Mechanical + Robotics', text: 'Got my robot arm control system built with ML integration. Amazing team, super responsive on WhatsApp. Will definitely use again!', rating: 5, avatar: 'AM', color: 'from-indigo-400 to-primary-500' },
    { name: 'Sneha Reddy', college: 'Osmania University', branch: 'IT Final Year', text: 'The full-stack web project they built was production-ready. Clean code, proper folder structure, working deployment. Exactly what I needed.', rating: 5, avatar: 'SR', color: 'from-blue-500 to-cyan-400' },
    { name: 'Karthik Babu', college: 'PSG College of Technology', branch: 'EEE', text: 'Mini project delivery within 24 hours. The lab report and PPT they provided were professional-grade. My faculty was very impressed.', rating: 5, avatar: 'KB', color: 'from-primary-500 to-indigo-400' },
    { name: 'Divya Lakshmi', college: 'SASTRA University', branch: 'AI & DS Final Year', text: 'Built a complete ML-based crop prediction model with a React dashboard. They walked me through every algorithm used. Best investment!', rating: 5, avatar: 'DL', color: 'from-sky-400 to-primary-400' },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-28 overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #0a1225 0%, #070d1b 100%)' }}>
            <div className="max-w-7xl mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
                    <div className="section-tag mb-5">Student Reviews</div>
                    <h2 className="section-heading">Loved by <span className="text-gradient">1000+ Students</span></h2>
                    <p className="section-sub">Real results from real engineering students across India.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <motion.div key={t.name}
                            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }} transition={{ delay: i * 0.08, duration: 0.5 }}
                            whileHover={{ y: -6 }}
                            className="glass rounded-2xl p-6 relative group cursor-default"
                        >
                            <Quote size={28} className="text-primary-400/20 mb-4" />
                            <p className="text-slate-300 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                            <div className="flex gap-0.5 mb-5">
                                {Array.from({ length: t.rating }).map((_, j) => (
                                    <Star key={j} size={13} className="text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                                    {t.avatar}
                                </div>
                                <div>
                                    <p className="text-white font-semibold text-sm">{t.name}</p>
                                    <p className="text-slate-500 text-xs">{t.branch}</p>
                                    <p className="text-primary-400/70 text-xs">{t.college}</p>
                                </div>
                            </div>
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                style={{ boxShadow: 'inset 0 0 0 1px rgba(77,166,255,0.15)' }} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
