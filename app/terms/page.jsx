export default function TermsPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 relative" style={{ background: '#070d1b' }}>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-900/15 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="max-w-3xl mx-auto glass rounded-3xl p-8 md:p-12 relative z-10">
                <div className="section-tag mb-6">Legal Information</div>
                <h1 className="font-display font-bold text-4xl text-white mb-8">Terms of Service</h1>
                
                <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
                        <p>By accessing and using ProtoBuild Labs (ProjectHub360), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use our service.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">2. Service Description</h2>
                        <p>ProtoBuild Labs provides engineering project development services, including Major Projects, Mini Projects, Prototypes, and related software/hardware solutions for educational and professional purposes.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">3. Payments and Refunds</h2>
                        <p>All payments are processed securely through Razorpay. Project development begins only after the initial payment or full payment is verified. Refunds are strictly subject to our project cancellation policy and are generally not provided once active development has commenced.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">4. Intellectual Property</h2>
                        <p>Upon full payment, the source code and physical prototype (if applicable) are transferred to the client. ProtoBuild Labs retains the right to showcase the project abstract and basic architecture in our portfolio unless a Non-Disclosure Agreement (NDA) is signed.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">5. Limitation of Liability</h2>
                        <p>ProtoBuild Labs shall not be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.</p>
                    </section>

                    <p className="text-slate-500 pt-8 border-t border-white/10">Last updated: {new Date().toLocaleDateString()}</p>
                </div>
            </div>
        </div>
    );
}
