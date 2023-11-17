/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/storage/:path*',
                destination: process.env.BACKEND_ADMIN_URL + '/:path*',
            },
            {
                source: '/api/:path*',
                destination: process.env.BACKEND_URL + '/:path*',
            },
        ];
    },
    images: {
        domains: ['localhost'],
    },
};

module.exports = nextConfig;
