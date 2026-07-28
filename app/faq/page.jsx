'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import Footer from '@/components/Footer';

const faqCategories = [
    'All',
    'General Questions',
    'Orders & Pricing',
    'Delivery & Shipping',
    'Technical Support',
    'Software & Code',
    'Hardware & Components',
    'Policies & Refunds'
];

const faqs = [
    // General Questions
    { category: 'General Questions', q: 'What is ProtoBuild Labs?', a: 'ProtoBuild Labs is a premier platform dedicated to helping engineering students build, deploy, and understand complex technical projects for their academics, competitions, and startups.' },
    { category: 'General Questions', q: 'Who can use your services?', a: 'Our services are designed primarily for engineering students (B.Tech, B.E., M.Tech, Diploma) but are also perfect for hobbyists, researchers, and early-stage startup founders.' },
    { category: 'General Questions', q: 'Do you provide ready-made projects?', a: 'Yes, we provide fully built, tested, and ready-to-run projects along with complete documentation, source code, and video explanations.' },
    { category: 'General Questions', q: 'Can I claim this project as my own?', a: 'Yes, you receive full white-label rights to the projects you purchase. We do not place our branding on the final hardware or software you present to your professors.' },
    { category: 'General Questions', q: 'Do you help with project ideas?', a: 'Absolutely. We offer free consultations to help you brainstorm and select a project that fits your syllabus, budget, and skill level.' },
    { category: 'General Questions', q: 'Are your projects unique?', a: 'While we have a catalog of standard projects, our Custom Build tier guarantees a 100% unique implementation tailored specifically to your university\'s requirements.' },
    { category: 'General Questions', q: 'Do you provide reports and PPTs?', a: 'Yes, all Major Projects and Custom Builds come with IEEE-standard documentation, base papers, synopsis, final reports, and presentation decks.' },
    { category: 'General Questions', q: 'How do I contact support?', a: 'You can reach us via email at hello@protobuildlabs.in, or by calling our support helpline. Support is available Monday to Saturday, 9 AM to 7 PM IST.' },
    { category: 'General Questions', q: 'Is there a limit to how many projects I can order?', a: 'No, you can order as many projects as you need. We also offer bulk discounts for college groups and student chapters.' },
    { category: 'General Questions', q: 'Do you offer internships?', a: 'Yes, we occasionally hire talented developers from our customer base. Keep an eye on our Careers page for openings.' },

    // Orders & Pricing
    { category: 'Orders & Pricing', q: 'What are your pricing tiers?', a: 'We have three main tiers: Mini Projects (up to ₹2,999), Major Projects (up to ₹3,500 for standard catalog items), and Custom Builds (priced based on complexity).' },
    { category: 'Orders & Pricing', q: 'Are there any hidden charges?', a: 'No, our pricing is 100% transparent. The price you see includes hardware, software, documentation, and standard shipping.' },
    { category: 'Orders & Pricing', q: 'Do you offer EMI or installment payments?', a: 'For Custom Builds exceeding ₹10,000, we accept a 50% advance and 50% prior to dispatch. Standard projects require full payment upfront.' },
    { category: 'Orders & Pricing', q: 'Can I upgrade my Mini Project to a Major Project later?', a: 'Yes, you can pay the difference to receive the advanced documentation and extended support that comes with the Major Project tier.' },
    { category: 'Orders & Pricing', q: 'Are taxes included in the price?', a: 'Yes, all prices displayed on our website are inclusive of GST.' },
    { category: 'Orders & Pricing', q: 'How do I track my payment?', a: 'Once payment is completed via Razorpay, you will receive an automated invoice and order confirmation via email.' },
    { category: 'Orders & Pricing', q: 'Do you offer group discounts?', a: 'Yes, if 3 or more students order projects together, we offer a flat 15% group discount. Contact support for a custom payment link.' },
    
    // Delivery & Shipping
    { category: 'Delivery & Shipping', q: 'How long does delivery take?', a: 'Standard catalog projects are dispatched within 2-3 business days. Custom builds usually take 7-14 days depending on hardware availability.' },
    { category: 'Delivery & Shipping', q: 'Do you ship internationally?', a: 'Currently, we only ship hardware projects within India. However, software-only projects (Web, Mobile, AI) are available globally.' },
    { category: 'Delivery & Shipping', q: 'Which courier service do you use?', a: 'We partner with BlueDart, Delhivery, and DTDC to ensure safe and fast delivery across India.' },
    { category: 'Delivery & Shipping', q: 'How is the hardware packaged?', a: 'Hardware is packed in anti-static bags and securely cushioned in corrugated boxes to prevent transit damage.' },
    { category: 'Delivery & Shipping', q: 'Can I change my delivery address after ordering?', a: 'Yes, you can change your address within 24 hours of placing the order by contacting our support team.' },
    { category: 'Delivery & Shipping', q: 'What if my package arrives damaged?', a: 'Record an unboxing video immediately upon receiving the package. If components are damaged, we will ship replacements free of cost.' },
    { category: 'Delivery & Shipping', q: 'Do you provide express shipping?', a: 'Yes, overnight express shipping is available for tier-1 cities at an additional cost.' },

    // Technical Support
    { category: 'Technical Support', q: 'How do I set up my project?', a: 'Every project comes with a step-by-step setup video and a ReadMe file detailing software installation and hardware connections.' },
    { category: 'Technical Support', q: 'What if I face an error while running the code?', a: 'Our technical support team will assist you via AnyDesk or Google Meet to resolve any environment or execution errors.' },
    { category: 'Technical Support', q: 'How long is the support period?', a: 'Mini projects include 3 days of support. Major projects include 1 week. Custom builds include 1 month of dedicated support.' },
    { category: 'Technical Support', q: 'Can you explain the code to me?', a: 'Yes, our documentation is heavily commented. For Major and Custom projects, we also provide architecture diagrams and block diagrams to help you understand the flow.' },
    { category: 'Technical Support', q: 'Do you prepare us for viva/presentations?', a: 'We provide a "Viva Prep Guide" containing the top 50 likely questions your examiner might ask about your specific tech stack.' },
    { category: 'Technical Support', q: 'What happens if my laptop doesn\'t support the software?', a: 'We clearly list system requirements before purchase. If your PC lacks the specs (e.g., for heavy Machine Learning models), we can help you deploy it on Google Colab or a cloud server.' },

    // Software & Code
    { category: 'Software & Code', q: 'Do you provide the complete source code?', a: 'Yes, you get 100% of the source code. Nothing is hidden, compiled, or obfuscated.' },
    { category: 'Software & Code', q: 'What programming languages do you use?', a: 'We specialize in Python, JavaScript/TypeScript, C/C++ (for Arduino/ESP), Java, and Dart. We use modern frameworks like React, Next.js, and Flutter.' },
    { category: 'Software & Code', q: 'Are the ML models pre-trained?', a: 'Yes, we provide both the pre-trained weights (e.g., .h5, .pt files) and the original training scripts so you can retrain them yourself.' },
    { category: 'Software & Code', q: 'Can I upload the code to my personal GitHub?', a: 'Yes, once purchased, the code is yours. We encourage you to push it to your GitHub to build your portfolio.' },
    { category: 'Software & Code', q: 'Do you use outdated technologies like PHP/MySQL?', a: 'While we prefer modern stacks (MERN, Next.js, Firebase), we can build projects in older stacks if your university specifically requires it.' },
    { category: 'Software & Code', q: 'How is the code delivered?', a: 'You will receive a secure Google Drive link containing the zipped code, datasets, and documentation immediately upon dispatch.' },

    // Hardware & Components
    { category: 'Hardware & Components', q: 'Do you use original components?', a: 'Yes, we source authentic components from trusted distributors. We use genuine Arduino, Raspberry Pi, and Espressif boards.' },
    { category: 'Hardware & Components', q: 'Do I need to solder anything?', a: 'No, projects are shipped fully assembled. We use jumper wires and custom PCBs so everything is plug-and-play.' },
    { category: 'Hardware & Components', q: 'What if a sensor stops working after a few days?', a: 'If a component fails within the support period due to a manufacturing defect, we will ship a replacement.' },
    { category: 'Hardware & Components', q: 'Do you provide circuit diagrams?', a: 'Yes, detailed circuit diagrams (schematics) made in Fritzing/Proteus are included with every hardware project.' },
    { category: 'Hardware & Components', q: 'Can I power the project with a battery?', a: 'Most of our IoT/Robotics projects run on 9V batteries, 18650 Li-ion cells, or standard USB power banks.' },
    { category: 'Hardware & Components', q: 'Are 3D printed parts included?', a: 'For robotics and custom drones, we include custom 3D printed chassis and mounts as part of the build.' },

    // Policies & Refunds
    { category: 'Policies & Refunds', q: 'What is your refund policy?', a: 'Because digital goods and custom hardware cannot be reused, we do not offer refunds once the source code is delivered or the hardware is dispatched.' },
    { category: 'Policies & Refunds', q: 'What if the project doesn\'t work as promised?', a: 'We rigorously test every project before delivery. If it doesn\'t work due to our error, our engineers will fix it remotely at no extra cost.' },
    { category: 'Policies & Refunds', q: 'Can I cancel my order?', a: 'Orders can be cancelled within 12 hours of placement for a full refund, provided the development or dispatch process hasn\'t started.' },
    { category: 'Policies & Refunds', q: 'Is my data secure with you?', a: 'Yes, we strictly adhere to data privacy laws. We do not share your project details, personal information, or college name with third parties.' },
    { category: 'Policies & Refunds', q: 'Do you offer a warranty?', a: 'We offer a limited 7-day warranty on hardware components against transit damage or dead-on-arrival (DOA) issues.' }
];

function FAQItem({ q, a, idx }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.02 }}
            className="mb-4 glass rounded-2xl overflow-hidden border border-white/5 hover:border-primary-500/30 transition-all"
        >
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
            >
                <span className="font-semibold text-white text-lg pr-8">{q}</span>
                <ChevronDown 
                    size={20} 
                    className={\`text-slate-400 transition-transform duration-300 \${isOpen ? 'rotate-180 text-primary-400' : ''}\`} 
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-6 pb-5 pt-1 border-t border-white/5">
                            <p className="text-slate-400 leading-relaxed text-sm md:text-base">{a}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function FAQPage() {
    const [search, setSearch] = useState('');
    const [activeCat, setActiveCat] = useState('All');

    const filteredFaqs = faqs.filter(faq => {
        const matchSearch = faq.q.toLowerCase().includes(search.toLowerCase()) || faq.a.toLowerCase().includes(search.toLowerCase());
        const matchCat = activeCat === 'All' || faq.category === activeCat;
        return matchSearch && matchCat;
    });

    return (
        <div className="min-h-screen pt-32 pb-20 relative" style={{ background: '#070d1b' }}>
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-900/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/10">
                        <HelpCircle size={32} className="text-primary-400" />
                    </div>
                    <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
                        Frequently Asked <span className="text-primary-400">Questions</span>
                    </h1>
                    <p className="text-slate-400 text-lg">
                        Everything you need to know about our projects, pricing, and support.
                    </p>
                </div>

                <div className="glass p-2 rounded-2xl mb-10 border border-white/10 flex items-center shadow-lg max-w-2xl mx-auto">
                    <Search className="text-slate-500 ml-4 mr-2" size={20} />
                    <input 
                        type="text" 
                        placeholder="Search for a question..." 
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-transparent border-none text-white py-4 px-2 focus:outline-none focus:ring-0 placeholder:text-slate-500"
                    />
                </div>

                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {faqCategories.map(cat => (
                        <button 
                            key={cat}
                            onClick={() => setActiveCat(cat)}
                            className={\`px-4 py-2 rounded-xl text-sm font-medium transition-all \${activeCat === cat ? 'bg-primary-500 text-white shadow-glow-sm' : 'glass text-slate-400 hover:text-white hover:bg-white/10'}\`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="space-y-2">
                    {filteredFaqs.length > 0 ? (
                        filteredFaqs.map((faq, idx) => (
                            <FAQItem key={idx} idx={idx} q={faq.q} a={faq.a} />
                        ))
                    ) : (
                        <div className="text-center py-16">
                            <MessageCircle size={48} className="text-slate-600 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">No results found</h3>
                            <p className="text-slate-400">We couldn't find any questions matching your search.</p>
                        </div>
                    )}
                </div>
                
                <div className="mt-16 glass p-8 rounded-3xl border border-white/5 text-center">
                    <h3 className="text-2xl font-bold text-white mb-3">Still have questions?</h3>
                    <p className="text-slate-400 mb-6">Can't find the answer you're looking for? Please chat to our friendly team.</p>
                    <a href="mailto:hello@protobuildlabs.in" className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-6 rounded-xl transition-colors shadow-glow-sm">
                        <MessageCircle size={18} /> Get in touch
                    </a>
                </div>
            </div>
            
            <div className="mt-20">
                <Footer />
            </div>
        </div>
    );
}
