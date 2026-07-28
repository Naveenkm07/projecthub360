export default function CareersPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 relative flex flex-col items-center justify-center text-center" style={{ background: '#070d1b' }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-900/10 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="w-20 h-20 glass rounded-2xl flex items-center justify-center mb-8 border border-white/10">
                <svg className="w-10 h-10 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            </div>
            
            <h1 className="font-display font-bold text-4xl text-white mb-4">Join Our <span className="text-primary-400">Team</span></h1>
            <p className="text-slate-400 text-lg max-w-md mb-8">We are always looking for talented embedded engineers, web developers, and technical writers. Currently, we don't have any open positions, but we are growing fast!</p>
            
            <p className="text-slate-500 text-sm">Send your resume to <a href="mailto:careers@protobuildlabs.in" className="text-primary-400 hover:underline">careers@protobuildlabs.in</a> and we'll keep you in mind.</p>
        </div>
    );
}
