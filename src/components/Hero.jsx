import { motion } from 'framer-motion';
import { Suspense } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import FloatingScene from './FloatingScene';

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center overflow-hidden bg-mesh"
            style={{
                background:
                    'linear-gradient(135deg, #e0f0ff 0%, #f0f8ff 40%, #f8fbff 70%, #ffffff 100%)',
            }}
        >
            {/* 3D Canvas Background */}
            <div className="absolute inset-0 z-0 opacity-90">
                <Suspense fallback={null}>
                    <FloatingScene />
                </Suspense>
            </div>

            {/* Decorative blobs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/40 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 flex flex-col items-center text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md border border-primary-200 rounded-full text-sm font-semibold text-primary-600 shadow-sm mb-8"
                >
                    <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
                    Engineering Project Development Platform
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.7 }}
                    className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-gray-800 leading-tight max-w-4xl"
                >
                    We Build Engineering{' '}
                    <span className="text-gradient">Projects</span> That Stand Out
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="mt-6 text-gray-500 text-xl md:text-2xl font-medium"
                >
                    Major &nbsp;|&nbsp; Mini &nbsp;|&nbsp; Prototype Solutions for Students
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.65, duration: 0.6 }}
                    className="mt-10 flex flex-col sm:flex-row items-center gap-4"
                >
                    <a href="#contact" className="btn-primary flex items-center gap-2 group">
                        Get Your Project
                        <ArrowRight
                            size={18}
                            className="group-hover:translate-x-1 transition-transform duration-300"
                        />
                    </a>
                    <a href="#services" className="btn-outline">
                        Explore Services
                    </a>
                </motion.div>

                {/* Stats row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="mt-16 grid grid-cols-3 gap-6 sm:gap-12"
                >
                    {[
                        { value: '500+', label: 'Projects Delivered' },
                        { value: '50+', label: 'Tech Stacks' },
                        { value: '98%', label: 'Student Satisfaction' },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <p className="font-display font-bold text-3xl text-gradient">{stat.value}</p>
                            <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Scroll indicator */}
                <motion.a
                    href="#services"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 hover:text-primary-400 transition-colors group"
                >
                    <span className="text-xs font-medium">Scroll</span>
                    <ChevronDown size={20} className="animate-bounce" />
                </motion.a>
            </div>
        </section>
    );
}
