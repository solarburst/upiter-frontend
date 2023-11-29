// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNextIntl = require('next-intl/plugin')(
    // This is the default (also the `src` folder is supported out of the box)
    './src/i18n.ts',
);

module.exports = withNextIntl({
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
    headers: () => [
        {
            source: '/:path*',
            headers: [
                {
                    key: 'Cache-Control',
                    value: 'no-store',
                },
            ],
        },
    ],
});
