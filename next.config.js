/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', //in dev (this is on pushing to git)
    // output: 'out', //in prod
    images: { unoptimized: true },
}

module.exports = nextConfig
