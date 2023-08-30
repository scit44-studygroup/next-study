/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,

	async redirects() {
		return [
			{
				source: "/api/naver",
				destination: `https://www.naver.com`,
				permanent: false,
			},
		];
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "i.pinimg.com",
				port: "",
				pathname: "/**",
			},
		],
	},
};

module.exports = nextConfig;
