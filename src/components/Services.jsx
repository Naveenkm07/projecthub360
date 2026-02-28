import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cpu, CircuitBoard, FlaskConical, ArrowRight } from 'lucide-react';

const services = [
    {
        icon: Cpu,
        title: 'Major Projects',
        tag: 'FYP / Final Year',
        description:
            'End-to-end development of complex final year engineering projects with full documentation, working demo, and technical support for viva and presentations.',
        features: ['Complete Source Code', 'Research Paper Support', 'Circuit / Schematic', 'Video Demo'],
        color: 'from-blue-500 to-primary-400',
        glow: 'shadow-blue-200',
        bg: 'from-blue-50 to-white',
    },
    {
        icon: CircuitBoard,
        title: 'Mini Projects',
        tag: 'Semester / Lab',
        description:
            'Affordable, ready-to-submit mini projects for all engineering branches. Delivered fast with clean code and presentation-ready documentation.',
        features: ['Quick Delivery', 'PPT Included', 'Report Template', 'Multiple Languages'],
        color: 'from-primary-400 to-sky-400',
        glow: 'shadow-sky-200',
        bg: 'from-sky-50 to-white',
    },
    {
        icon: FlaskConical,
        title: 'Prototype Development',
        tag: 'Hardware / IoT / ML',
        description:
            'Hands-on physical + software prototypes for exhibitions, hackathons, and lab experiments. IoT, robotics, embedded systems, and AI integrations.',
        features: ['IoT / Arduino / RPi', 'ML Integration', 'Exhibition-Ready', 'Live Demo Support'],
        color: 'from-indigo-500 to-primary-500',
        glow: 'shadow-indigo-200',
        bg: 'from-indigo-50 to-white',
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
    }),
};

function ServiceCard({ service, index }) {
    const Icon = service.icon;
    return (
        <motion.div
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="group relative rounded-3xl overflow-hidden cursor-pointer"
            style={{
                background: 'rgba(255,255,255,0.6)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.8)',
                boxShadow: '0 8px 40px rgba(77,166,255,0.12), 0 2px 8px rgba(0,0,0,0.06)',
            }}
        >
            {/* Top gradient bar */}
            <div className={`h-1.5 w-full bg-gradient-to-r ${service.color}`} />

            <div className="p-8">
                {/* Icon */}
                <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg ${service.glow} group-hover:scale-110 transition-transform duration-300`}
                >
                    <Icon size={28} className="text-white" />
                </div>

                {/* Tag */}
                <span className="tag-badge mb-3 inline-block">{service.tag}</span>

                {/* Title */}
                <h3 className="font-display font-bold text-2xl text-gray-800 mb-3">{service.title}</h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                    {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                            <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                            {f}
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <a
                    href="#contact"
                    className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent group-hover:gap-3 transition-all duration-300`}
                >
                    Get Started <ArrowRight size={16} className="text-primary-400" />
                </a>
            </div>

            {/* Hover glow overlay */}
            <div
                className={`absolute inset-0 bg-gradient-to-br ${service.bg} opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none rounded-3xl`}
            />
        </motion.div>
    );
}

export default function Services() {
    return (
        <section id="services" className="py-24 bg-section-gradient">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="tag-badge mb-4 inline-block">What We Offer</span>
                    <h2 className="section-heading">
                        Our <span className="text-gradient">Services</span>
                    </h2>
                    <p className="section-subtext">
                        From concept to completion — we handle everything so you can focus on learning and presenting.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((s, i) => (
                        <ServiceCard key={s.title} service={s} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
