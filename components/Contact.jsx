'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, User, Building2, FolderKanban, MessageSquare, CheckCircle, Phone } from 'lucide-react';

const projectTypes = ['Major Project', 'Mini Project', 'Prototype Development', 'IoT / Embedded', 'Machine Learning / AI', 'Web Application', 'Mobile Application', 'Other'];

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', college: '', projectType: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | loading | success | error

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                setStatus('success');
                setForm({ name: '', email: '', phone: '', college: '', projectType: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-28 relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #070d1b 0%, #0e1a33 100%)' }}>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-900/15 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
                    {/* Left */}
                    <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
                        <div className="section-tag mb-5">Get In Touch</div>
                        <h2 className="section-heading mb-6">
                            Ready to Build Your <span className="text-gradient">Dream Project?</span>
                        </h2>
                        <p className="text-slate-400 leading-relaxed mb-10">
                            Fill the form and our team responds within <strong className="text-white">24 hours</strong>.
                            We'll discuss requirements, timeline, and pricing.
                        </p>
                        <div className="space-y-4">
                            {[
                                { icon: Mail, label: 'Email', value: 'hello@protobuildlabs.in' },
                                { icon: Phone, label: 'WhatsApp', value: '+91 98765 43210' },
                                { icon: Building2, label: 'Hours', value: 'Mon–Sat, 9AM – 8PM IST' },
                            ].map((info) => {
                                const Icon = info.icon;
                                return (
                                    <div key={info.label} className="flex items-center gap-4 p-4 glass rounded-2xl">
                                        <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Icon size={17} className="text-white" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500">{info.label}</p>
                                            <p className="text-white font-semibold text-sm">{info.value}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.1 }}
                        className="glass rounded-3xl p-8 glow-border">
                        {status === 'success' ? (
                            <motion.div initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                                className="flex flex-col items-center py-12 text-center gap-4">
                                <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-blue-600 rounded-full flex items-center justify-center shadow-glow">
                                    <CheckCircle size={38} className="text-white" />
                                </div>
                                <h3 className="font-display font-bold text-2xl text-white">Message Received!</h3>
                                <p className="text-slate-400 text-sm max-w-xs">We'll review your project and respond within 24 hours.</p>
                                <button onClick={() => setStatus('idle')} className="mt-3 text-primary-400 text-sm hover:underline">Submit another</button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <h3 className="font-display font-bold text-xl text-white mb-6">Tell Us About Your Project</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="relative"><User size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                                        <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required className="input-dark pl-9" /></div>
                                    <div className="relative"><Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                                        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required className="input-dark pl-9" /></div>
                                </div>
                                <div className="relative"><Phone size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                                    <input name="phone" placeholder="WhatsApp Number" value={form.phone} onChange={handleChange} className="input-dark pl-9" /></div>
                                <div className="relative"><Building2 size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                                    <input name="college" placeholder="College / University" value={form.college} onChange={handleChange} required className="input-dark pl-9" /></div>
                                <div className="relative"><FolderKanban size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none z-10" />
                                    <select name="projectType" value={form.projectType} onChange={handleChange} required className="input-dark pl-9 appearance-none cursor-pointer">
                                        <option value="">Select Project Type</option>
                                        {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                                    </select></div>
                                <div className="relative"><MessageSquare size={14} className="absolute left-3.5 top-4 text-slate-500" />
                                    <textarea name="message" placeholder="Describe your project, deadline, requirements..." value={form.message} onChange={handleChange} rows={4} required className="input-dark pl-9 resize-none" /></div>
                                <motion.button type="submit" disabled={status === 'loading'}
                                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                                    className="w-full py-4 bg-gradient-to-r from-primary-500 to-primary-400 text-white font-semibold rounded-xl shadow-glow hover:shadow-[0_0_40px_rgba(77,166,255,0.5)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60">
                                    {status === 'loading' ? (
                                        <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                                    ) : (
                                        <><Send size={16} /> Send Project Request</>
                                    )}
                                </motion.button>
                                {status === 'error' && <p className="text-red-400 text-xs text-center">Something went wrong. Please try again.</p>}
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
