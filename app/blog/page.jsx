export default function BlogPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 relative flex flex-col items-center justify-center text-center" style={{ background: '#070d1b' }}>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-900/15 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="w-20 h-20 glass rounded-2xl flex items-center justify-center mb-8 border border-white/10">
                <svg className="w-10 h-10 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
            </div>
            
            <h1 className="font-display font-bold text-4xl text-white mb-4">Engineering <span className="text-primary-400">Blog</span></h1>
            <p className="text-slate-400 text-lg max-w-md">Our engineering blog is currently under construction. Check back soon for tutorials, project guides, and tech news!</p>
        </div>
    );
}
