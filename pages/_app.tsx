import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Roboto } from "next/font/google";

const inter = Roboto({ subsets: ["latin"], weight: "400" });
console.log(inter);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />;
    </main>
  );
}
