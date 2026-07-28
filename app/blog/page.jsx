'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogs } from '@/lib/blogData';
import Footer from '@/components/Footer';

export default function BlogListingPage() {
    const [search, setSearch] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', ...Array.from(new Set(blogs.map(b => b.category)))];

    const filteredBlogs = blogs.filter(b => {
        const matchSearch = b.title.toLowerCase().includes(search.toLowerCase()) || b.excerpt.toLowerCase().includes(search.toLowerCase());
        const matchCat = activeCategory === 'All' || b.category === activeCategory;
        return matchSearch && matchCat;
    });

    const featuredBlog = blogs[0];

    return (
        <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #070d1b 0%, #0a1225 100%)' }}>
            {/* Hero Section */}
            <div className="pt-32 pb-16 px-6 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0e1a33 0%, #070d1b 100%)' }}>
                <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary-900/20 rounded-full blur-[100px] pointer-events-none" />
                
                <div className="max-w-7xl mx-auto relative z-10 text-center mb-16">
                    <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
                        Engineering <span className="text-primary-400">Blog</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Tutorials, guides, and tech news to help you build better engineering projects.
                    </p>
                </div>

                {/* Featured Blog */}
                {activeCategory === 'All' && !search && (
                    <div className="max-w-7xl mx-auto">
                        <Link href={\`/blog/\${featuredBlog.slug}\`} className="group block">
                            <div className="glass rounded-3xl overflow-hidden border border-white/5 hover:border-primary-500/30 transition-all grid md:grid-cols-2 gap-8 items-center">
                                <div className={\`h-64 md:h-full min-h-[300px] bg-gradient-to-br \${featuredBlog.coverGradient} relative overflow-hidden\`}>
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                </div>
                                <div className="p-8 md:p-12 md:pl-4">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="px-3 py-1 bg-primary-500/20 text-primary-400 text-xs font-bold rounded-full">
                                            {featuredBlog.category}
                                        </span>
                                        <span className="flex items-center gap-1.5 text-slate-500 text-xs font-medium">
                                            <Calendar size={14} /> {featuredBlog.date}
                                        </span>
                                    </div>
                                    <h2 className="font-display font-bold text-3xl text-white mb-4 group-hover:text-primary-400 transition-colors">
                                        {featuredBlog.title}
                                    </h2>
                                    <p className="text-slate-400 text-base mb-6 leading-relaxed">
                                        {featuredBlog.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="flex items-center gap-1.5 text-slate-500 text-sm font-medium">
                                            <Clock size={16} /> {featuredBlog.readTime}
                                        </span>
                                        <span className="flex items-center gap-2 text-primary-400 font-semibold text-sm group-hover:gap-3 transition-all">
                                            Read Article <ArrowRight size={16} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                )}
            </div>

            <div className="max-w-7xl mx-auto px-6 pb-24">
                {/* Search and Filters */}
                <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between border-b border-white/5 pb-8">
                    <div className="flex flex-wrap gap-2">
                        {categories.map(cat => (
                            <button 
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={\`px-4 py-2 rounded-xl text-sm font-medium transition-all \${activeCategory === cat ? 'bg-primary-500 text-white shadow-glow-sm' : 'glass text-slate-400 hover:text-white hover:bg-white/10'}\`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    
                    <div className="relative w-full md:w-72">
                        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                        <input 
                            type="text" 
                            placeholder="Search articles..." 
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-primary-500 transition-colors"
                        />
                    </div>
                </div>

                {/* Blog Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredBlogs.slice(activeCategory === 'All' && !search ? 1 : 0).map((blog, i) => (
                        <motion.div 
                            key={blog.slug}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Link href={\`/blog/\${blog.slug}\`} className="group h-full flex flex-col glass rounded-2xl overflow-hidden border border-white/5 hover:border-primary-500/30 transition-all">
                                <div className={\`h-48 bg-gradient-to-br \${blog.coverGradient} relative overflow-hidden\`}>
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-semibold px-2.5 py-1 bg-white/5 text-slate-300 rounded-md">
                                            {blog.category}
                                        </span>
                                        <span className="text-slate-500 text-xs font-medium">{blog.date}</span>
                                    </div>
                                    <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-primary-400 transition-colors">
                                        {blog.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm mb-6 line-clamp-3 flex-1">
                                        {blog.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                                        <span className="text-slate-500 text-xs font-medium flex items-center gap-1.5">
                                            <Clock size={14} /> {blog.readTime}
                                        </span>
                                        <ArrowRight size={18} className="text-primary-400 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {filteredBlogs.length === 0 && (
                    <div className="text-center py-20">
                        <h3 className="text-xl font-bold text-white mb-2">No articles found</h3>
                        <p className="text-slate-400">Try adjusting your search or filters.</p>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
}
