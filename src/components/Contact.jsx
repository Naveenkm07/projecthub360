import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, User, Building2, FolderKanban, MessageSquare, CheckCircle } from 'lucide-react';

const projectTypes = [
    'Major Project',
    'Mini Project',
    'Prototype Development',
    'IoT / Embedded',
    'Machine Learning / AI',
    'Web Application',
    'Mobile Application',
    'Other',
];

const inputClass =
    'w-full px-4 py-3.5 rounded-xl bg-white/70 backdrop-blur-sm border border-primary-100 text-gray-700 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition-all duration-300';

export default function Contact() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        college: '',
        projectType: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate submit
        setTimeout(() => setSubmitted(true), 500);
    };

    return (
        <section
            id="contact"
            className="py-24 relative overflow-hidden"
            style={{
                background: 'linear-gradient(160deg, #f0f8ff 0%, #e8f4ff 50%, #f8fbff 100%)',
            }}
        >
            {/* Blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/50 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                    {/* Left Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65 }}
                    >
                        <span className="tag-badge inline-block mb-4">Get In Touch</span>
                        <h2 className="section-heading mb-6">
                            Ready to Build Your{' '}
                            <span className="text-gradient">Dream Project?</span>
                        </h2>
                        <p className="text-gray-500 leading-relaxed mb-10">
                            Fill out the form and our team will get back to you within <strong className="text-gray-700">24 hours</strong>.
                            We'll discuss requirements, timeline, and pricing tailored just for you.
                        </p>

                        {/* Contact info cards */}
                        <div className="space-y-4">
                            {[
                                { icon: Mail, label: 'Email Us', value: 'hello@protobuildlabs.in' },
                                { icon: MessageSquare, label: 'WhatsApp', value: '+91 98765 43210' },
                                { icon: Building2, label: 'Office Hours', value: 'Mon–Sat, 9AM – 8PM IST' },
                            ].map((info) => {
                                const Icon = info.icon;
                                return (
                                    <div
                                        key={info.label}
                                        className="flex items-center gap-4 p-4 rounded-2xl"
                                        style={{
                                            background: 'rgba(255,255,255,0.65)',
                                            backdropFilter: 'blur(12px)',
                                            border: '1px solid rgba(255,255,255,0.8)',
                                            boxShadow: '0 2px 12px rgba(77,166,255,0.08)',
                                        }}
                                    >
                                        <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Icon size={18} className="text-white" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400 font-medium">{info.label}</p>
                                            <p className="text-gray-700 font-semibold text-sm">{info.value}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65, delay: 0.1 }}
                        className="rounded-3xl p-8 sm:p-10"
                        style={{
                            background: 'rgba(255,255,255,0.6)',
                            backdropFilter: 'blur(24px)',
                            border: '1px solid rgba(255,255,255,0.85)',
                            boxShadow: '0 8px 40px rgba(77,166,255,0.12)',
                        }}
                    >
                        {submitted ? (
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="flex flex-col items-center justify-center py-12 text-center gap-4"
                            >
                                <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                                    <CheckCircle size={40} className="text-white" />
                                </div>
                                <h3 className="font-display font-bold text-2xl text-gray-800">Message Received!</h3>
                                <p className="text-gray-500 text-sm max-w-xs">
                                    We'll review your project requirements and get back to you within 24 hours.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-4 text-primary-500 text-sm font-semibold hover:underline"
                                >
                                    Submit another inquiry
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <h3 className="font-display font-bold text-2xl text-gray-800 mb-6">
                                    Tell Us About Your Project
                                </h3>

                                {/* Name + Email row */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="relative">
                                        <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                            className={`${inputClass} pl-10`}
                                        />
                                    </div>
                                    <div className="relative">
                                        <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                            className={`${inputClass} pl-10`}
                                        />
                                    </div>
                                </div>

                                {/* College */}
                                <div className="relative">
                                    <Building2 size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        name="college"
                                        placeholder="College / University Name"
                                        value={form.college}
                                        onChange={handleChange}
                                        required
                                        className={`${inputClass} pl-10`}
                                    />
                                </div>

                                {/* Project Type */}
                                <div className="relative">
                                    <FolderKanban size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10" />
                                    <select
                                        name="projectType"
                                        value={form.projectType}
                                        onChange={handleChange}
                                        required
                                        className={`${inputClass} pl-10 appearance-none cursor-pointer`}
                                    >
                                        <option value="">Select Project Type</option>
                                        {projectTypes.map((t) => (
                                            <option key={t} value={t}>{t}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Message */}
                                <div className="relative">
                                    <MessageSquare size={15} className="absolute left-3.5 top-4 text-gray-400" />
                                    <textarea
                                        name="message"
                                        placeholder="Describe your project idea, deadline, specific requirements..."
                                        value={form.message}
                                        onChange={handleChange}
                                        rows={4}
                                        required
                                        className={`${inputClass} pl-10 resize-none`}
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-4 bg-gradient-to-r from-blue-500 to-primary-400 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-200 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                                >
                                    <Send size={17} />
                                    Send My Project Request
                                </motion.button>

                                <p className="text-center text-xs text-gray-400">
                                    No spam. We'll only use this to discuss your project.
                                </p>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
