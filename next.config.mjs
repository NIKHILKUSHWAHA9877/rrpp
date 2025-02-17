/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["uploads-ssl.webflow.com"], // ✅ Add external image domain
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
};

export default nextConfig;


