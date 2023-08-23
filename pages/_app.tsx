import "@/styles/globals.css";
import { Roboto } from "next/font/google";

import type { AppProps } from "next/app";

const inter = Roboto({ subsets: ["latin"], weight: "400" });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={`h-full ${inter.className}`}>
			<Component {...pageProps} />
		</main>
	);
}
