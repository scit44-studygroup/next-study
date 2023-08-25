const API_KEY = process.env.API_KEY;

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,

	async rewrite() {
		return [
			{
				source: "/api/movies",
				destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
			},
		];
	},
};

module.exports = nextConfig;
