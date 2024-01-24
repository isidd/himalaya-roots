/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', //in dev
    // output: 'out', //in prod
    images: { unoptimized: true },
}

module.exports = nextConfig
