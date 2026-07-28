export default function HowItWorksPage() {
    const steps = [
        { num: '01', title: 'Consultation', desc: 'We start by understanding your project requirements, constraints, and technical specifications.' },
        { num: '02', title: 'Design & Prototyping', desc: 'Our engineers design the architecture and create initial prototypes for your approval.' },
        { num: '03', title: 'Development', desc: 'We build the hardware and software components, ensuring everything integrates perfectly.' },
        { num: '04', title: 'Delivery & Support', desc: 'You receive the final working project along with complete documentation and technical support.' }
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 relative" style={{ background: '#070d1b' }}>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-900/15 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="max-w-4xl mx-auto relative z-10">
                <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
                    How It <span className="text-primary-400">Works</span>
                </h1>
                <p className="text-slate-400 text-lg mb-16 max-w-2xl">
                    Building your engineering project shouldn't be complicated. Here is our simple 4-step process to bring your idea to life.
                </p>

                <div className="space-y-8">
                    {steps.map((step, idx) => (
                        <div key={idx} className="glass p-8 rounded-2xl border border-white/5 flex gap-6 items-start hover:border-primary-500/30 transition-all">
                            <span className="text-4xl font-display font-bold text-primary-400/30">{step.num}</span>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-slate-400">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
