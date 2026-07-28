'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';
import Footer from '@/components/Footer';

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate network request
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setTimeout(() => setIsSuccess(false), 5000);
            e.target.reset();
        }, 1500);
    };

    return (
        <div className="min-h-screen pt-32 pb-0 relative bg-[#070d1b]">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-900/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="max-w-6xl mx-auto px-6 relative z-10 mb-24">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-primary-400 font-bold tracking-wider uppercase text-sm mb-4 block">Get In Touch</span>
                    <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                        Let's build something <span className="text-primary-400">amazing.</span>
                    </h1>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        Have a project idea? Need technical support? We'd love to hear from you. Fill out the form below or reach out directly.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-12 items-start">
                    {/* Contact Info Cards */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="glass p-8 rounded-3xl border border-white/5 hover:border-primary-500/30 transition-all flex gap-6 items-start">
                            <div className="w-12 h-12 rounded-2xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center shrink-0">
                                <Mail className="text-primary-400" size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-xl mb-1">Email Us</h3>
                                <p className="text-slate-400 mb-2">Our friendly team is here to help.</p>
                                <a href="mailto:hello@protobuildlabs.in" className="text-primary-400 font-semibold hover:underline">hello@protobuildlabs.in</a>
                            </div>
                        </div>

                        <div className="glass p-8 rounded-3xl border border-white/5 hover:border-primary-500/30 transition-all flex gap-6 items-start">
                            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                                <MapPin className="text-blue-400" size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-xl mb-1">Visit Us</h3>
                                <p className="text-slate-400 mb-2">Come say hello at our lab.</p>
                                <p className="text-slate-300 font-medium">IIT Madras Research Park<br/>Chennai, Tamil Nadu 600113</p>
                            </div>
                        </div>

                        <div className="glass p-8 rounded-3xl border border-white/5 hover:border-primary-500/30 transition-all flex gap-6 items-start">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                                <Phone className="text-emerald-400" size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-xl mb-1">Call Us</h3>
                                <p className="text-slate-400 mb-2">Mon-Sat from 9am to 6pm.</p>
                                <a href="tel:+919876543210" className="text-emerald-400 font-semibold hover:underline">+91 98765 43210</a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-3 glass p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-600 to-blue-400" />
                        
                        <h3 className="text-2xl font-display font-bold text-white mb-8">Send us a message</h3>
                        
                        {isSuccess ? (
                            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 text-center flex flex-col items-center justify-center h-[400px]">
                                <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle2 size={40} className="text-emerald-400" />
                                </div>
                                <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                                <p className="text-emerald-200">Thanks for reaching out. We will get back to you within 24 hours.</p>
                            </div>
                        ) : (
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300">First Name</label>
                                        <input required type="text" className="w-full bg-[#0a1225] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder:text-slate-600" placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300">Last Name</label>
                                        <input required type="text" className="w-full bg-[#0a1225] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder:text-slate-600" placeholder="Doe" />
                                    </div>
                                </div>
                                
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Email Address</label>
                                    <input required type="email" className="w-full bg-[#0a1225] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder:text-slate-600" placeholder="john@university.edu" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Project Type</label>
                                    <select required className="w-full bg-[#0a1225] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all appearance-none cursor-pointer">
                                        <option value="" disabled selected>Select an option...</option>
                                        <option value="mini">Mini Project (Hardware/Software)</option>
                                        <option value="major">Major / Final Year Project</option>
                                        <option value="custom">Custom Development</option>
                                        <option value="support">Technical Support</option>
                                        <option value="other">Other Inquiry</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Message</label>
                                    <textarea required className="w-full bg-[#0a1225] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all h-32 resize-none placeholder:text-slate-600" placeholder="Tell us about your project requirements or issue..."></textarea>
                                </div>

                                <button 
                                    disabled={isSubmitting}
                                    className="w-full bg-primary-600 hover:bg-primary-500 disabled:opacity-70 disabled:hover:bg-primary-600 text-white font-bold py-4 rounded-xl transition-all shadow-glow-sm flex items-center justify-center gap-2 group"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center gap-2"><Clock className="animate-spin" size={20} /> Sending...</span>
                                    ) : (
                                        <span className="flex items-center gap-2">Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></span>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    );
}
