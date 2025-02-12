import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'github-readme-stats.vercel.app',
				pathname: '/api?username=caolan93',
				port: '',
				search: '',
			},
		],
	},
};

export default nextConfig;
