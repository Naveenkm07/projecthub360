export default function ContactPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 relative" style={{ background: '#070d1b' }}>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-900/15 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="max-w-5xl mx-auto relative z-10 grid md:grid-cols-2 gap-12">
                <div>
                    <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
                        Get in <span className="text-primary-400">Touch</span>
                    </h1>
                    <p className="text-slate-400 text-lg mb-8">
                        Have a project idea? Need technical support? We'd love to hear from you. Fill out the form or reach out directly via email or phone.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="glass p-6 rounded-2xl border border-white/5">
                            <h3 className="text-white font-bold mb-1">Email Us</h3>
                            <p className="text-slate-400">hello@protobuildlabs.in</p>
                        </div>
                        <div className="glass p-6 rounded-2xl border border-white/5">
                            <h3 className="text-white font-bold mb-1">Call Us</h3>
                            <p className="text-slate-400">+91 98765 43210</p>
                        </div>
                        <div className="glass p-6 rounded-2xl border border-white/5">
                            <h3 className="text-white font-bold mb-1">Location</h3>
                            <p className="text-slate-400">Chennai, Tamil Nadu, India</p>
                        </div>
                    </div>
                </div>

                <div className="glass p-8 rounded-3xl border border-white/5">
                    <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label className="block text-sm text-slate-400 mb-2">Name</label>
                            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500" placeholder="John Doe" />
                        </div>
                        <div>
                            <label className="block text-sm text-slate-400 mb-2">Email</label>
                            <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500" placeholder="john@example.com" />
                        </div>
                        <div>
                            <label className="block text-sm text-slate-400 mb-2">Message</label>
                            <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 h-32 resize-none" placeholder="Tell us about your project..."></textarea>
                        </div>
                        <button className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 rounded-xl transition-colors">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
