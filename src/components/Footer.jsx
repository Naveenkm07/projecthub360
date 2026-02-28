import { Zap, Github, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const links = {
    Services: ['Major Projects', 'Mini Projects', 'Prototype Dev', 'Custom Build'],
    Branches: ['Computer Science', 'Electronics', 'Mechanical', 'Civil & More'],
    Company: ['About Us', 'Portfolio', 'Blog', 'Careers'],
};

const socials = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
];

export default function Footer() {
    return (
        <footer
            className="relative overflow-hidden"
            style={{
                background: 'linear-gradient(160deg, #0f2a5e 0%, #1a3a7a 50%, #0d2456 100%)',
            }}
        >
            {/* Top glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary-400/60 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-12 bg-primary-400/10 blur-2xl" />

            <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
                    {/* Brand column */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-9 h-9 bg-gradient-to-br from-primary-400 to-blue-500 rounded-xl flex items-center justify-center">
                                <Zap size={18} className="text-white" fill="white" />
                            </div>
                            <span className="font-display font-bold text-xl text-white">
                                Proto<span className="text-primary-400">Build</span>
                                <span className="text-blue-300 font-medium"> Labs</span>
                            </span>
                        </div>
                        <p className="text-blue-200/70 text-sm leading-relaxed max-w-xs mb-6">
                            Your trusted partner for engineering project development. We build projects that stand out and help students succeed.
                        </p>

                        {/* Contact info */}
                        <div className="space-y-2.5">
                            {[
                                { icon: Mail, text: 'hello@protobuildlabs.in' },
                                { icon: Phone, text: '+91 98765 43210' },
                                { icon: MapPin, text: 'Chennai, Tamil Nadu, India' },
                            ].map(({ icon: Icon, text }) => (
                                <div key={text} className="flex items-center gap-2.5">
                                    <Icon size={14} className="text-primary-400 flex-shrink-0" />
                                    <span className="text-blue-200/70 text-sm">{text}</span>
                                </div>
                            ))}
                        </div>

                        {/* Socials */}
                        <div className="flex gap-3 mt-6">
                            {socials.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="w-9 h-9 rounded-xl bg-white/10 hover:bg-primary-400/30 flex items-center justify-center transition-colors duration-300 border border-white/10 hover:border-primary-400/40"
                                >
                                    <Icon size={16} className="text-blue-200 hover:text-white" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link columns */}
                    {Object.entries(links).map(([heading, items]) => (
                        <div key={heading}>
                            <h4 className="font-display font-semibold text-white mb-4 text-sm">{heading}</h4>
                            <ul className="space-y-2.5">
                                {items.map((item) => (
                                    <li key={item}>
                                        <a
                                            href="#"
                                            className="text-blue-200/60 text-sm hover:text-primary-400 transition-colors duration-300"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-white/10 mb-6" />

                {/* Bottom Row */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-blue-200/50 text-xs text-center sm:text-left">
                        © {new Date().getFullYear()} ProtoBuild Labs. All rights reserved. Built with ❤️ for engineering students.
                    </p>
                    <div className="flex gap-4">
                        {['Privacy Policy', 'Terms of Service', 'Refund Policy'].map((link) => (
                            <a
                                key={link}
                                href="#"
                                className="text-blue-200/40 text-xs hover:text-primary-400 transition-colors"
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
