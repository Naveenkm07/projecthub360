/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['firebasestorage.googleapis.com'],
    },
    serverExternalPackages: ['razorpay'],
};

export default nextConfig;
