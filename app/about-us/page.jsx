export default function AboutUsPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 relative" style={{ background: '#070d1b' }}>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-900/15 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="max-w-4xl mx-auto relative z-10">
                <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
                    About <span className="text-primary-400">ProtoBuild Labs</span>
                </h1>
                
                <div className="glass p-8 rounded-3xl border border-white/5 space-y-6">
                    <p className="text-slate-300 text-lg leading-relaxed">
                        ProtoBuild Labs was founded with a single mission: to help engineering students bridge the gap between theoretical knowledge and practical execution. We understand that building complex projects, whether for academics or competitions, can be overwhelming due to a lack of resources, mentorship, or hardware components.
                    </p>
                    <p className="text-slate-300 text-lg leading-relaxed">
                        We are a team of passionate engineers, developers, and makers who love turning ideas into reality. From simple mini-projects to complex final-year prototypes, we provide the technical expertise, hardware, and source code required to ensure your project is a success.
                    </p>
                    <div className="pt-6 border-t border-white/10 mt-8">
                        <h3 className="text-xl font-bold text-white mb-4">Our Vision</h3>
                        <p className="text-slate-400">
                            To be the most trusted engineering partner for students across the globe, fostering innovation and making hands-on technical education accessible to everyone.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
