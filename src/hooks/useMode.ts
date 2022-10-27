import { useCallback, useEffect, useState } from "react";

export const useMode = () =>{

    const [mode, setMode] = useState<string>()

    const loadMode = useCallback(() => {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
        setMode("dark");
      } else {
        document.documentElement.classList.remove("dark");
        setMode("light");
      }
    }, []);

    useEffect(() => {
      loadMode();
    }, []);

    return {
      mode,
      loadMode,
    };
}