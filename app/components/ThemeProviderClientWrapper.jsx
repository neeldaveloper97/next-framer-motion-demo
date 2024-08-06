// components/ThemeProviderClientWrapper.js
"use client";

import React from "react";
import { ThemeProvider } from "../contexts/themeContext";
import DarkModeSwitch from "./common/Switch";

const ThemeProviderClientWrapper = ({ children }) => {
  return <ThemeProvider>
    <DarkModeSwitch />
    {children}
    </ThemeProvider>;
};

export default ThemeProviderClientWrapper;
