/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['@acme/ui', 'lodash-es'],
    output: 'standalone',
  images: {
    domains: ['localhost'],
    remotePatterns: [
        {
            protocol: 'http',
            hostname: '**',
            port: '',
            pathname: '**',
        },
    ],
},
}

module.exports = nextConfig
