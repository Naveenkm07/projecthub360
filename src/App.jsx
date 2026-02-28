import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import ProjectShowcase from './components/ProjectShowcase';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <ProjectShowcase />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
