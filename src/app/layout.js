'use client'
import { Manrope } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import LoggingComponent from "./components/LoggingComponent";
import RegisterComponent from "./components/RegisterComponent";
import useStore from "./store/useStore";
const manrope = Manrope({ subsets: ["cyrillic", "latin"] });

export default function RootLayout({ children }) {
  const {logging, registred, openLogingWindow} = useStore()
  return (
    <html lang="en">
      <body className={`${manrope.className} overflow-hidden w-full relative`}>
        <Toaster position="top-right" />
        <div className={`${openLogingWindow ? 'blur-md' : ''}`}>{children}</div>
        {logging && !registred && openLogingWindow ? <LoggingComponent/> : <></>}
        {!logging && !registred && openLogingWindow ? <RegisterComponent/> : <></>}
      </body>

      {/* <GoogleAnalytics gaId="G-YXLJHRMD71" /> */}
    </html>
  );
}
