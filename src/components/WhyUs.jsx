import { motion } from 'framer-motion';
import { FileCode2, BookOpen, HeadphonesIcon, Wrench, CheckCircle2 } from 'lucide-react';

const features = [
    {
        icon: FileCode2,
        title: 'Source Code Included',
        description:
            'Receive complete, well-commented source code for every project. Understand every line and customize as needed.',
        color: 'from-blue-400 to-primary-500',
    },
    {
        icon: BookOpen,
        title: 'Documentation + PPT',
        description:
            'Professional project report, IEEE-format documentation, and a polished PowerPoint presentation ready to submit.',
        color: 'from-sky-400 to-blue-500',
    },
    {
        icon: HeadphonesIcon,
        title: 'Technical Explanation Support',
        description:
            'Our engineers guide you through the project so you can confidently answer any question during viva or review.',
        color: 'from-indigo-400 to-blue-400',
    },
    {
        icon: Wrench,
        title: 'Custom Development',
        description:
            'Have a unique idea? We build fully custom projects tailored to your specific requirements and college guidelines.',
        color: 'from-primary-400 to-indigo-500',
    },
];

const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: { delay: i * 0.12, duration: 0.55 },
    }),
};

export default function WhyUs() {
    return (
        <section
            id="why-us"
            className="py-24 relative overflow-hidden"
            style={{
                background: 'linear-gradient(160deg, #dbeffe 0%, #f0f8ff 40%, #fff 100%)',
            }}
        >
            {/* Blob decorations */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary-100/60 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65 }}
                    >
                        <span className="tag-badge inline-block mb-4">Why ProtoBuild Labs</span>
                        <h2 className="section-heading mb-6">
                            Everything You Need to{' '}
                            <span className="text-gradient">Succeed</span>
                        </h2>
                        <p className="text-gray-500 leading-relaxed mb-8">
                            We don't just deliver projects — we provide the complete package that helps you understand,
                            present, and ace your evaluations. Trusted by engineering students across colleges.
                        </p>

                        {/* Checklist extras */}
                        <div className="space-y-3">
                            {[
                                'On-time delivery guaranteed',
                                'Plagiarism-free, original work',
                                'Multiple revision rounds included',
                                'WhatsApp support throughout',
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <CheckCircle2 size={18} className="text-primary-400 flex-shrink-0" />
                                    <span className="text-gray-600 text-sm">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10">
                            <a href="#contact" className="btn-primary inline-block">
                                Start Your Project
                            </a>
                        </div>
                    </motion.div>

                    {/* Right: Feature cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {features.map((f, i) => {
                            const Icon = f.icon;
                            return (
                                <motion.div
                                    key={f.title}
                                    custom={i}
                                    variants={cardVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    whileHover={{ y: -6, scale: 1.02 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                    className="group p-6 rounded-2xl"
                                    style={{
                                        background: 'rgba(255,255,255,0.65)',
                                        backdropFilter: 'blur(16px)',
                                        border: '1px solid rgba(255,255,255,0.85)',
                                        boxShadow: '0 4px 24px rgba(77,166,255,0.1)',
                                    }}
                                >
                                    <div
                                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <Icon size={22} className="text-white" />
                                    </div>
                                    <h3 className="font-display font-bold text-gray-800 mb-2">{f.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
