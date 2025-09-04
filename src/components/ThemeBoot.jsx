import { useThemeMode } from "flowbite-react";
import { useEffect } from "react";

export const ThemeBoot = () => {
  const { setMode } = useThemeMode();

  useEffect(() => {
    const savedMode = localStorage.getItem('flowbite-theme-mode');
    if (!savedMode) {
      // Set mode to system preference or light as fallback
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      // setMode(prefersDark ? "dark" : "light");
      setMode("light");
    }
    // else do nothing, keep saved mode or user toggle
  }, [setMode]);

  return null;
};