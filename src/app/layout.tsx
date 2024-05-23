import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { config } from '@fortawesome/fontawesome-svg-core'

import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import "./globals.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Peak Mindset",
  description: "Created to Promote Self improvements in all its aspects",

icons: [
  {
    rel:"icon",
    type:"image/png",
    url:'/rocket-lunch.png'

}]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body className="body--container">
    <nav className="navbar">
      <FontAwesomeIcon icon={faDumbbell} href="#"/>
   <h2>Peak Mindset </h2>

    </nav>
    <h1> Welcome to Peak Mindset</h1>
        {children}
        <Analytics/>
        <footer className="footer-layout">
          <h4>Copyright &copy; 2023 Peak Mindset   
          </h4>
        </footer>
      </body>
    </html>
  );
}
