import './globals.css';
import { AuthProvider } from '@/context/AuthContext';
import Navbar from '@/components/Navbar';

export const metadata = {
    title: 'ProtoBuild Labs | Engineering Project Development',
    description:
        'Premium engineering project development for students. Major Projects, Mini Projects, and Prototype solutions with source code, documentation, and technical support.',
    keywords: 'engineering projects, major projects, mini projects, IoT, ML, final year projects, prototype development',
    openGraph: {
        title: 'ProtoBuild Labs',
        description: 'We Build Engineering Projects That Stand Out',
        type: 'website',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </head>
            <body className="font-sans bg-dark-900 text-slate-200 antialiased">
                <AuthProvider>
                    <Navbar />
                    <main>{children}</main>
                </AuthProvider>
            </body>
        </html>
    );
}
