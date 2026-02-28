import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import ProjectShowcase from '@/components/ProjectShowcase';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
    return (
        <>
            <Hero />
            <Services />
            <WhyUs />
            <ProjectShowcase />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    );
}
