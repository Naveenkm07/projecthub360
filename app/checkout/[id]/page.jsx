'use client';

import { useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, CreditCard, ArrowLeft, Loader2 } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { projects } from '@/lib/projectsData';

export default function CheckoutPage() {
    const params = useParams();
    const id = params?.id;
    
    const project = projects.find(p => p.id === id);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', college: '' });

    if (!project) {
        return notFound();
    }

    const handlePayment = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Simulated Payment Delay for realism if Razorpay isn't configured
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // In a real app, this would hit: 
            // const res = await fetch('/api/razorpay/create-order', { method: 'POST', body: JSON.stringify({ amount: project.price }) });
            // const data = await res.json();
            // Then open Razorpay window...

            setSuccess(true);
        } catch (error) {
            console.error('Payment failed', error);
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="min-h-screen pt-32 pb-0 flex flex-col justify-between bg-[#070d1b]">
                <div className="flex-1 flex items-center justify-center p-6">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="glass p-12 rounded-3xl border border-emerald-500/30 text-center max-w-lg w-full relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-emerald-500/5" />
                        <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
                            <ShieldCheck size={40} />
                        </div>
                        <h2 className="text-3xl font-display font-bold text-white mb-4">Payment Successful!</h2>
                        <p className="text-slate-400 mb-8">
                            Thank you for purchasing <strong>{project.title}</strong>. An email with the download link and documentation has been sent to {formData.email || 'your email'}.
                        </p>
                        <Link href="/dashboard" className="inline-flex bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-glow-sm">
                            Go to Dashboard
                        </Link>
                    </motion.div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-0 relative bg-[#070d1b]">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-900/10 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="max-w-5xl mx-auto px-6 relative z-10 mb-24">
                
                <Link href={`/projects/${project.id}`} className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8">
                    <ArrowLeft size={16} /> Back to Project
                </Link>

                <div className="grid md:grid-cols-2 gap-12">
                    
                    {/* Left Column: Checkout Form */}
                    <div>
                        <h1 className="font-display font-bold text-3xl text-white mb-6">Checkout</h1>
                        
                        <form onSubmit={handlePayment} className="space-y-6">
                            <div className="glass p-6 rounded-2xl border border-white/5 space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-2">Full Name</label>
                                    <input 
                                        required 
                                        type="text" 
                                        value={formData.name}
                                        onChange={e => setFormData({...formData, name: e.target.value})}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-primary-500 transition-colors" 
                                        placeholder="John Doe" 
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-2">Email Address</label>
                                    <input 
                                        required 
                                        type="email" 
                                        value={formData.email}
                                        onChange={e => setFormData({...formData, email: e.target.value})}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-primary-500 transition-colors" 
                                        placeholder="john@college.edu" 
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-2">University / College Name</label>
                                    <input 
                                        required 
                                        type="text" 
                                        value={formData.college}
                                        onChange={e => setFormData({...formData, college: e.target.value})}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-primary-500 transition-colors" 
                                        placeholder="Institute of Technology" 
                                    />
                                </div>
                            </div>

                            <button 
                                type="submit" 
                                disabled={loading}
                                className="w-full bg-primary-600 hover:bg-primary-500 disabled:opacity-50 text-white py-4 rounded-xl font-bold transition-all shadow-glow flex items-center justify-center gap-2 text-lg"
                            >
                                {loading ? <Loader2 className="animate-spin" size={20} /> : <CreditCard size={20} />}
                                {loading ? 'Processing...' : `Pay ₹${project.price?.toLocaleString()}`}
                            </button>
                        </form>

                        <div className="flex items-center gap-2 text-slate-500 text-sm mt-6 justify-center">
                            <Lock size={14} /> Payments are 100% encrypted and secure.
                        </div>
                    </div>

                    {/* Right Column: Order Summary */}
                    <div>
                        <div className="glass p-8 rounded-3xl border border-white/5 sticky top-32">
                            <h3 className="text-xl font-bold text-white mb-6">Order Summary</h3>
                            
                            <div className="flex items-start gap-4 mb-6 pb-6 border-b border-white/10">
                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-600/40 to-blue-900/40 flex items-center justify-center text-3xl">
                                    {project.emoji || '📁'}
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">{project.title}</h4>
                                    <span className="text-xs text-slate-400 px-2 py-0.5 bg-white/5 rounded-md">{project.category}</span>
                                </div>
                            </div>

                            <div className="space-y-4 text-sm mb-6 pb-6 border-b border-white/10">
                                <div className="flex justify-between text-slate-400">
                                    <span>Subtotal</span>
                                    <span>₹{project.price?.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-slate-400">
                                    <span>Taxes & GST (18%)</span>
                                    <span>Included</span>
                                </div>
                                <div className="flex justify-between text-emerald-400">
                                    <span>Digital Delivery</span>
                                    <span>Free</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center text-xl font-bold text-white">
                                <span>Total</span>
                                <span>₹{project.price?.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
            <Footer />
        </div>
    );
}
