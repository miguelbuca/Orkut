import "../src/styles/globals.css";
import type { AppProps } from "next/app";
import { AppTemplate } from "@components/templates";
import { useMode } from "@hooks/useMode";

function MyApp({ Component, pageProps }: AppProps) {

  useMode()

  return (
    <AppTemplate>
      <Component {...pageProps} />
    </AppTemplate>
  );
}

export default MyApp;
