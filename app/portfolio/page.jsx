export default function PortfolioPage() {
    const projects = [
        { title: 'IoT Smart Agriculture System', category: 'Major Project', tech: 'ESP32, React, Node.js' },
        { title: 'Autonomous Drone Navigation', category: 'Custom Build', tech: 'Raspberry Pi, Python, OpenCV' },
        { title: 'Blockchain Voting App', category: 'Major Project', tech: 'Solidity, Next.js, Web3' },
        { title: 'Smart Home Automation', category: 'Mini Project', tech: 'Arduino, Bluetooth, Android App' }
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 relative" style={{ background: '#070d1b' }}>
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary-900/15 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="max-w-6xl mx-auto relative z-10 text-center">
                <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
                    Our <span className="text-primary-400">Portfolio</span>
                </h1>
                <p className="text-slate-400 text-lg mb-16 max-w-2xl mx-auto">
                    Take a look at some of the incredible projects we've built for engineering students across the country.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((p, idx) => (
                        <div key={idx} className="glass p-8 rounded-2xl border border-white/5 text-left hover:border-primary-500/30 transition-all cursor-pointer group">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-xs font-semibold px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full">{p.category}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">{p.title}</h3>
                            <p className="text-slate-400 text-sm">Technologies: {p.tech}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
