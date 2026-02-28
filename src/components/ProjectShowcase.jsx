import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
    {
        title: 'Smart Attendance System',
        category: 'IoT / Computer Vision',
        description:
            'Automated attendance tracking using facial recognition with Raspberry Pi, OpenCV, and a web dashboard.',
        tags: ['Python', 'OpenCV', 'Raspberry Pi', 'Flask', 'SQLite'],
        gradient: 'from-blue-400 to-primary-500',
        accent: 'bg-blue-50',
        emoji: '🎯',
    },
    {
        title: 'E-Waste Management Portal',
        category: 'Web / Full Stack',
        description:
            'Platform connecting users to certified e-waste recyclers with pickup scheduling and reward points system.',
        tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
        gradient: 'from-sky-400 to-blue-500',
        accent: 'bg-sky-50',
        emoji: '♻️',
    },
    {
        title: 'Crop Disease Detection',
        category: 'Machine Learning / AI',
        description:
            'CNN-based model achieving 94% accuracy in detecting crop diseases from leaf images with a mobile app frontend.',
        tags: ['TensorFlow', 'Python', 'Flutter', 'Keras', 'FastAPI'],
        gradient: 'from-indigo-400 to-primary-400',
        accent: 'bg-indigo-50',
        emoji: '🌱',
    },
    {
        title: 'Automated Irrigation System',
        category: 'Embedded / IoT',
        description:
            'Arduino-based smart irrigation using soil moisture sensors with real-time monitoring app and cloud data logging.',
        tags: ['Arduino', 'C++', 'MQTT', 'Node-RED', 'Firebase'],
        gradient: 'from-primary-400 to-sky-400',
        accent: 'bg-blue-50',
        emoji: '💧',
    },
    {
        title: 'Traffic Flow Analyzer',
        category: 'Computer Vision',
        description:
            'Real-time vehicle counting and traffic density analysis system using YOLO object detection on surveillance feeds.',
        tags: ['YOLOv8', 'OpenCV', 'Python', 'Django', 'PostgreSQL'],
        gradient: 'from-blue-500 to-indigo-500',
        accent: 'bg-indigo-50',
        emoji: '🚦',
    },
    {
        title: 'Student Result Management',
        category: 'Web Application',
        description:
            'Comprehensive result management system with role-based access for admin, faculty, and students with analytics.',
        tags: ['React', 'Spring Boot', 'MySQL', 'JWT', 'Chart.js'],
        gradient: 'from-sky-500 to-primary-400',
        accent: 'bg-sky-50',
        emoji: '📊',
    },
];

export default function ProjectShowcase() {
    return (
        <section id="projects" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="tag-badge inline-block mb-4">Our Portfolio</span>
                    <h2 className="section-heading">
                        Project <span className="text-gradient">Showcase</span>
                    </h2>
                    <p className="section-subtext">
                        A glimpse of the innovative engineering projects we have delivered for students across various domains.
                    </p>
                </motion.div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ delay: i * 0.1, duration: 0.55 }}
                            whileHover={{ y: -8 }}
                            className="group relative rounded-2xl overflow-hidden cursor-pointer"
                            style={{
                                background: 'rgba(255,255,255,0.9)',
                                border: '1px solid rgba(77,166,255,0.12)',
                                boxShadow: '0 4px 30px rgba(77,166,255,0.08), 0 1px 6px rgba(0,0,0,0.05)',
                                transition: 'box-shadow 0.3s ease',
                            }}
                            onHoverStart={(e) => { }}
                        >
                            {/* Header gradient area */}
                            <div
                                className={`h-32 bg-gradient-to-br ${project.gradient} relative flex items-center justify-center overflow-hidden`}
                            >
                                <span className="text-5xl filter drop-shadow-lg">{project.emoji}</span>
                                {/* Decorative circles */}
                                <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/10 rounded-full" />
                                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/10 rounded-full" />
                            </div>

                            <div className="p-6">
                                <span className={`tag-badge mb-3 inline-block`}>{project.category}</span>
                                <h3 className="font-display font-bold text-lg text-gray-800 mb-2 group-hover:text-primary-500 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.description}</p>

                                {/* Tech tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Link */}
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-500 hover:gap-2.5 transition-all duration-300"
                                >
                                    Request Similar <ExternalLink size={14} />
                                </a>
                            </div>

                            {/* Hover border */}
                            <div
                                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                                style={{
                                    background: `linear-gradient(135deg, rgba(77,166,255,0.04), rgba(77,166,255,0.01))`,
                                    boxShadow: 'inset 0 0 0 1.5px rgba(77,166,255,0.2)',
                                }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* View More Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-14"
                >
                    <a href="#contact" className="btn-outline inline-block">
                        Discuss Your Project Idea
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
