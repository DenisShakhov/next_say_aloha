import { Manrope } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["cyrillic", "latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
      <GoogleAnalytics gaId="G-YXLJHRMD71" />
    </html>
  );
}
