/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['firebasestorage.googleapis.com'],
    },
    experimental: {
        serverComponentsExternalPackages: ['razorpay'],
    },
};

export default nextConfig;
