import Rapper from "@/layout/Rapper";
import "@/style/globals.css";
import type { AppProps } from "next/app";
// import { GoogleOAuthProvider } from "@react-oauth/google"
import { Toaster } from "@/utils/toaster";
// import { KEYS } from "@/utils/constants";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Rapper>
      <Component {...pageProps} />
      <Toaster />
    </Rapper >
  );
}
