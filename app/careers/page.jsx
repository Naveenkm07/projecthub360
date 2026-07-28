'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight, Code2, Cpu, Laptop } from 'lucide-react';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function CareersPage() {
    const jobs = [
        {
            id: 1,
            title: 'Embedded Systems Engineer',
            department: 'Hardware',
            location: 'Chennai, India (Hybrid)',
            type: 'Full-time',
            icon: <Cpu size={24} className="text-emerald-400" />,
            color: 'emerald'
        },
        {
            id: 2,
            title: 'Frontend React Developer',
            department: 'Software',
            location: 'Remote',
            type: 'Full-time',
            icon: <Code2 size={24} className="text-blue-400" />,
            color: 'blue'
        },
        {
            id: 3,
            title: 'Machine Learning Intern',
            department: 'AI & Data',
            location: 'Remote',
            type: 'Internship (6 Months)',
            icon: <Laptop size={24} className="text-purple-400" />,
            color: 'purple'
        }
    ];

    const perks = [
        '100% Remote-friendly for software roles',
        'Hardware allowance for embedded engineers',
        'Flexible working hours (We care about output, not clock-ins)',
        'Free access to all premium courses and internal tools',
        'Annual company retreat',
        'Health insurance coverage'
    ];

    return (
        <div className="min-h-screen pt-32 pb-0 relative bg-[#070d1b]">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-900/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="max-w-5xl mx-auto px-6 relative z-10 mb-24">
                
                {/* Hero */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-primary-400 font-bold tracking-wider uppercase text-sm mb-4 block">Careers</span>
                    <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                        Build the future of <span className="text-primary-400">engineering education.</span>
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
                        We're looking for passionate makers, hackers, and builders who want to help the next generation of engineers succeed.
                    </p>
                </div>

                {/* Open Roles */}
                <div className="mb-24">
                    <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">Open Positions</h2>
                    <div className="space-y-4">
                        {jobs.map((job, i) => (
                            <motion.div 
                                key={job.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass p-6 md:p-8 rounded-3xl border border-white/5 hover:border-primary-500/30 transition-all group flex flex-col md:flex-row md:items-center justify-between gap-6"
                            >
                                <div className="flex items-start gap-6">
                                    <div className={\`w-14 h-14 rounded-2xl bg-\${job.color}-500/10 border border-\${job.color}-500/20 flex items-center justify-center shrink-0\`}>
                                        {job.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">{job.title}</h3>
                                        <div className="flex flex-wrap items-center gap-4 text-slate-400 text-sm font-medium">
                                            <span className="flex items-center gap-1.5"><Briefcase size={16} /> {job.department}</span>
                                            <span className="flex items-center gap-1.5"><MapPin size={16} /> {job.location}</span>
                                            <span className="flex items-center gap-1.5"><Clock size={16} /> {job.type}</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="w-full md:w-auto bg-white/5 hover:bg-primary-500 text-white px-6 py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 border border-white/10 hover:border-primary-500">
                                    Apply Now <ArrowRight size={18} />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Perks */}
                <div className="glass p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary-900/20 rounded-full blur-[80px] pointer-events-none" />
                    
                    <h2 className="text-3xl font-display font-bold text-white mb-8">Why work with us?</h2>
                    <div className="grid md:grid-cols-2 gap-y-4 gap-x-8">
                        {perks.map((perk, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0">
                                    <div className="w-2 h-2 rounded-full bg-primary-400" />
                                </div>
                                <span className="text-slate-300 font-medium">{perk}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-1">Don't see a fit?</h3>
                            <p className="text-slate-400 text-sm">Send your resume anyway. We're always looking for talent.</p>
                        </div>
                        <Link href="/contact" className="bg-primary-600 hover:bg-primary-500 text-white px-8 py-3.5 rounded-xl font-medium transition-all shadow-glow-sm">
                            Contact Us
                        </Link>
                    </div>
                </div>

            </div>
            
            <Footer />
        </div>
    );
}
