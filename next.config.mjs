/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverActions:true,
        mdxRs:true,
        serverComponentsExternalPackages:['mongoose']
    },
    images: {
        domains: ['avatars.githubusercontent.com','img.clerk.com'],
      },
};

export default nextConfig;
