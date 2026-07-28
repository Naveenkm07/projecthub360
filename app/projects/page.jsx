'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getProjects } from '@/lib/db';
import { ExternalLink, Search, Filter } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { projects as fallbackProjects } from '@/lib/projectsData';

const allCategories = ['All', 'IoT / Embedded', 'Machine Learning', 'Web Application', 'Computer Vision', 'Mobile App', 'Robotics'];



export default function ProjectsPage() {
    const [projects, setProjects] = useState(fallbackProjects);
    const [search, setSearch] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProjects()
            .then((data) => { if (data.length) setProjects(data); })
            .catch(() => { }) // fallback to static data
            .finally(() => setLoading(false));
    }, []);

    const filtered = projects.filter((p) => {
        const matchCat = activeCategory === 'All' || p.category === activeCategory;
        const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.tags?.some((t) => t.toLowerCase().includes(search.toLowerCase()));
        return matchCat && matchSearch;
    });

    return (
        <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #070d1b 0%, #0a1225 100%)' }}>
            {/* Hero */}
            <div className="pt-28 pb-16 text-center px-6" style={{ background: 'linear-gradient(180deg, #0e1a33 0%, #070d1b 100%)' }}>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <div className="section-tag mb-5 mx-auto inline-flex">Our Portfolio</div>
                    <h1 className="section-heading mb-4">Project <span className="text-gradient">Showcase</span></h1>
                    <p className="text-slate-400 text-lg">Browse our delivered engineering projects. All available for custom development.</p>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pb-24">
                {/* Search + Filter */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <div className="relative flex-1">
                        <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                        <input value={search} onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search projects or tech stack..."
                            className="input-dark pl-10 w-full" />
                    </div>
                    <div className="flex gap-2 flex-wrap">
                        {allCategories.map((cat) => (
                            <button key={cat} onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${activeCategory === cat
                                        ? 'bg-primary-400 text-white shadow-glow-sm'
                                        : 'glass text-slate-400 hover:text-white hover:bg-white/10'
                                    }`}>
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Count */}
                <p className="text-slate-600 text-sm mb-6">{filtered.length} project{filtered.length !== 1 ? 's' : ''} found</p>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((p, i) => (
                        <motion.div key={p.id}
                            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }} transition={{ delay: i * 0.05, duration: 0.4 }}
                            whileHover={{ y: -6 }} className="group glass rounded-2xl overflow-hidden cursor-pointer">
                            <div className="h-28 bg-gradient-to-br from-primary-600/40 to-blue-900/40 flex items-center justify-center relative">
                                <span className="text-4xl drop-shadow-lg">{p.emoji || '📁'}</span>
                                {p.price && <span className="absolute top-3 right-3 px-2.5 py-1 bg-primary-400/20 text-primary-400 text-xs font-bold rounded-lg">From ₹{p.price?.toLocaleString()}</span>}
                            </div>
                            <div className="p-5">
                                <span className="tech-tag mb-3 inline-block text-xs">{p.category}</span>
                                <h3 className="font-display font-bold text-white text-base mb-2 group-hover:text-primary-400 transition-colors">{p.title}</h3>
                                <p className="text-slate-400 text-sm mb-3 leading-relaxed line-clamp-2">{p.description}</p>
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {p.tags?.map((t) => <span key={t} className="px-2 py-0.5 bg-white/5 text-slate-500 text-xs rounded-md">{t}</span>)}
                                </div>
                                <Link href={`/projects/${p.id}`} className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-400 hover:gap-2.5 transition-all">
                                    View Details <ExternalLink size={12} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div className="text-center py-20 text-slate-500">
                        <p className="text-lg mb-2">No projects found.</p>
                        <Link href={`/projects/${p.id}`} className="btn-sm inline-block mt-4">Request Custom Project</Link>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}
