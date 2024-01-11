"use client";
import React, { createContext, useEffect, useState } from "react";
import { ThemeContextInterface, ThemeMode } from "./types";
import {
  CssBaseline,
  Theme,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { DarkTheme, lightTheme } from "./theme";

export const ThemeContext = createContext<ThemeContextInterface | null>(null);

export const ThemeContextProvider: React.FunctionComponent<
  React.PropsWithChildren
> = ({ children }) => {

  const [themeMode, setThemeMode] = useState<ThemeMode>(ThemeMode.LIGHT);
  const [theme, setTheme] = useState<Theme>(lightTheme);
  const SYSTEM_THEME: Exclude<ThemeMode, ThemeMode.SYSTEM> = useMediaQuery(
    "(prefers-color-scheme: dark)"
  )
    ? ThemeMode.DARK
    : ThemeMode.LIGHT;

  const switchThemeMode = (mode: ThemeMode) => {
    setThemeMode(mode);
    localStorage.setItem("mode", mode);
  };

  useEffect(() => {
    let mode = localStorage.getItem("mode") as ThemeMode;
    setThemeMode(mode);
  }, []);

  useEffect(() => {
    switch (themeMode) {
      case ThemeMode.LIGHT:
        return setTheme(lightTheme);
      case ThemeMode.DARK:
        return setTheme(DarkTheme);
      case ThemeMode.SYSTEM:
        switch (SYSTEM_THEME) {
          case ThemeMode.LIGHT:
            return setTheme(lightTheme);
          case ThemeMode.DARK:
            return setTheme(DarkTheme);
        }
      default:
        setTheme(lightTheme);
    }
  }, [themeMode, SYSTEM_THEME]);

  return (
    <ThemeContext.Provider
      value={{
        themeMode,
        switchThemeMode,
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline>{children}</CssBaseline>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
