export default function PricingPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 relative" style={{ background: '#070d1b' }}>
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary-900/15 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="max-w-6xl mx-auto relative z-10 text-center">
                <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
                    Simple, Transparent <span className="text-primary-400">Pricing</span>
                </h1>
                <p className="text-slate-400 text-lg mb-16 max-w-2xl mx-auto">
                    We offer flexible pricing models tailored specifically for engineering students and academic projects.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: 'Mini Projects', price: '₹2,999', desc: 'Perfect for semester mini-projects and basic prototypes.', features: ['Basic Hardware', 'Source Code', 'Circuit Diagram', 'Report Template'] },
                        { title: 'Major Projects', price: '₹6,999', desc: 'Comprehensive solutions for final year engineering students.', features: ['Advanced Hardware', 'Full Source Code', 'Detailed Documentation', 'Video Explanation', '1 Week Support'], highlighted: true },
                        { title: 'Custom Build', price: 'Custom', desc: 'Complex prototypes for competitions and startups.', features: ['Custom Architecture', 'Proprietary Code', 'Premium Components', 'Dedicated Engineer', '1 Month Support'] }
                    ].map((plan, idx) => (
                        <div key={idx} className={`glass p-8 rounded-3xl border text-left flex flex-col ${plan.highlighted ? 'border-primary-500/50 bg-primary-900/10 scale-105' : 'border-white/5'}`}>
                            <h3 className="text-xl font-bold text-white mb-2">{plan.title}</h3>
                            <p className="text-slate-400 text-sm mb-6">{plan.desc}</p>
                            <div className="text-3xl font-bold text-white mb-8">{plan.price}</div>
                            
                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((f, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            
                            <button className={`w-full py-3 rounded-xl font-medium transition-all ${plan.highlighted ? 'bg-primary-500 text-white hover:bg-primary-600' : 'bg-white/5 text-white hover:bg-white/10'}`}>
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
