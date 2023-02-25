import type { AppProps } from "next/app";
import GlobalCSS from "../styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalCSS />
      <Component {...pageProps} />
    </>
  );
}
