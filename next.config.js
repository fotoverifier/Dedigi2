/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['@acme/ui', 'lodash-es'],
    output: 'standalone',
  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: '**',
            port: '',
            pathname: '**',
        },
    ],
},
}

module.exports = nextConfig
