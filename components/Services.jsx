'use client';

import { motion } from 'framer-motion';
import { Cpu, CircuitBoard, FlaskConical, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import AnimatedCounter from './AnimatedCounter';

const services = [
    {
        icon: Cpu,
        title: 'Major Projects',
        tag: 'Final Year / FYP',
        description:
            'End-to-end development of complex final-year projects with research documentation, working demo, and viva support.',
        features: ['Complete Source Code', 'IEEE Report + PPT', 'Circuit Diagrams', 'Video Demo'],
        color: 'from-primary-400 to-blue-600',
        glow: 'rgba(77,166,255,0.25)',
    },
    {
        icon: CircuitBoard,
        title: 'Mini Projects',
        tag: 'Semester / Lab',
        description:
            'Quick-delivery semester projects for all engineering branches with clean code and presentation-ready documentation.',
        features: ['Fast Delivery', 'PPT Included', 'Multiple Languages', 'Lab Report'],
        color: 'from-blue-500 to-cyan-400',
        glow: 'rgba(34,211,238,0.2)',
    },
    {
        icon: FlaskConical,
        title: 'Prototype Dev',
        tag: 'Hardware / IoT / ML',
        description:
            'Exhibition-ready hardware + software prototypes. IoT, robotics, embedded systems, and AI model integrations.',
        features: ['IoT / Arduino / RPi', 'ML Integration', 'Exhibition-Ready', 'Live Demo Support'],
        color: 'from-indigo-500 to-primary-400',
        glow: 'rgba(99,102,241,0.2)',
    },
];

const stats = [
    { end: 500, suffix: '+', label: 'Projects Delivered' },
    { end: 50, suffix: '+', label: 'Tech Stacks' },
    { end: 98, suffix: '%', label: 'Satisfaction Rate' },
    { end: 3, suffix: 'hrs', label: 'Avg Response Time' },
];

export default function Services() {
    return (
        <section id="services" className="py-28 relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #0e1a33 0%, #070d1b 100%)' }}>
            <div className="absolute inset-0 bg-blue-mesh pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="section-tag mb-5">What We Offer</div>
                    <h2 className="section-heading">
                        Our <span className="text-gradient">Services</span>
                    </h2>
                    <p className="section-sub">
                        From concept to completion — we handle every aspect so you can focus on learning.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {services.map((s, i) => {
                        const Icon = s.icon;
                        return (
                            <motion.div
                                key={s.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ delay: i * 0.12, duration: 0.55 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group glass rounded-3xl p-8 cursor-pointer transition-all duration-300 relative overflow-hidden"
                                style={{ boxShadow: `0 4px 30px ${s.glow}` }}
                            >
                                {/* Top bar */}
                                <div className={`h-1 w-16 bg-gradient-to-r ${s.color} rounded-full mb-6 group-hover:w-full transition-all duration-500`} />

                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-5 shadow-glow-sm group-hover:shadow-glow transition-all duration-300`}>
                                    <Icon size={26} className="text-white" />
                                </div>

                                <span className="tech-tag mb-3 inline-block text-xs">{s.tag}</span>
                                <h3 className="font-display font-bold text-xl text-white mb-3">{s.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6">{s.description}</p>

                                <ul className="space-y-2 mb-8">
                                    {s.features.map((f) => (
                                        <li key={f} className="flex items-center gap-2 text-sm text-slate-400">
                                            <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${s.color} flex-shrink-0`} />
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <Link href="#contact" className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${s.color} bg-clip-text text-transparent group-hover:gap-3 transition-all`}>
                                    Get Started <ArrowRight size={15} className="text-primary-400" />
                                </Link>

                                {/* Hover glow backdrop */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl pointer-events-none`} />
                            </motion.div>
                        );
                    })}
                </div>

                {/* Stats counter row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="glass rounded-3xl p-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center glow-border"
                >
                    {stats.map((s) => (
                        <div key={s.label}>
                            <p className="font-display font-black text-4xl text-gradient">
                                <AnimatedCounter end={s.end} suffix={s.suffix} />
                            </p>
                            <p className="text-slate-500 text-sm mt-2">{s.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
