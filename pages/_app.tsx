import "@/styles/globals.css";
import { Roboto } from "next/font/google";

import type { AppProps } from "next/app";

const inter = Roboto({ subsets: ["latin"], weight: "400" });
console.log(inter);

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={inter.className}>
			<Component {...pageProps} />;
		</main>
	);
}
