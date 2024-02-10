import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "@/components/global";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-[#F9F6F7]">
      <Navbar />
      <div className="grid grid-cols-6">
        <div className="col-span-2" />
        <div className="col-span-4">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}
