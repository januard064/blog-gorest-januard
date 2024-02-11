import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar, SideBarMenu } from "@/components/global";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-[#F9F6F7] relative">
      <Navbar />
      <div className="grid grid-cols-6 mt-6">
        <div className="col-span-2 hidden md:block" >
          <SideBarMenu />
        </div>
        <div className="col-span-6 md:col-span-4">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}
