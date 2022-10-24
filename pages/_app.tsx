import "../src/styles/globals.css";
import type { AppProps } from "next/app";
import { AppTemplate } from "@components/templates";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <AppTemplate>
      <Component {...pageProps} />
    </AppTemplate>
  );
}

export default MyApp;
