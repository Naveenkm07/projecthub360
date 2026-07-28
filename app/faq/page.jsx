export default function FAQPage() {
    const faqs = [
        { q: 'Do you provide the complete source code?', a: 'Yes! All of our projects come with complete, well-commented source code so you can understand how everything works.' },
        { q: 'Can I request custom modifications to a project?', a: 'Absolutely. If you choose our Custom Build tier, we can modify existing projects or build something entirely new based on your specific requirements.' },
        { q: 'How long does delivery take?', a: 'Mini projects typically take 3-5 days. Major projects usually take 7-14 days depending on complexity and parts availability.' },
        { q: 'Do you provide project reports?', a: 'Yes, we provide IEEE format report templates and technical documentation to help you present your project successfully.' },
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 relative" style={{ background: '#070d1b' }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-900/10 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="max-w-3xl mx-auto relative z-10">
                <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4 text-center">
                    Frequently Asked <span className="text-primary-400">Questions</span>
                </h1>
                <p className="text-slate-400 text-center mb-12">Got questions? We've got answers.</p>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="glass p-6 rounded-2xl border border-white/5">
                            <h3 className="text-lg font-semibold text-white mb-3">{faq.q}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
