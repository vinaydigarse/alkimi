import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Faq from "./faq";

export default function App({ Component, pageProps }: AppProps) {
  return(

  <>
    <Navbar title={""} />
    <Component {...pageProps} />
    
  </>
  )
}
