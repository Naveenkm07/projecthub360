import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Services | ProtoBuild Labs',
    description: 'Major Projects, Mini Projects, and Prototype Development services for engineering students.',
};

export default function ServicesPage() {
    return (
        <div className="min-h-screen" style={{ background: '#070d1b' }}>
            {/* Page hero */}
            <div className="pt-28 pb-16 text-center px-6" style={{ background: 'linear-gradient(180deg, #0e1a33 0%, #070d1b 100%)' }}>
                <div className="section-tag mb-5 mx-auto inline-flex">What We Do</div>
                <h1 className="section-heading mb-4">Our <span className="text-gradient">Services</span></h1>
                <p className="text-slate-400 text-lg max-w-xl mx-auto">Premium engineering project development with full documentation, source code, and technical support.</p>
            </div>
            <Services />
            <WhyUs />
            <Contact />
            <Footer />
        </div>
    );
}
