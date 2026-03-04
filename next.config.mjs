/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com',
            },
        ],
    },
    serverExternalPackages: ['razorpay'],
    eslint: {
        // Don't fail the build on lint warnings/errors during deployment
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
