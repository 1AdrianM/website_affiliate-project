import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "./globals.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Peak Mindset",
  description: "Created to Promote Self improvements in all its aspects",
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
      <FontAwesomeIcon icon={faHome} href="#"/>
   <h2>Peak Mindset </h2>

    </nav>
    <h1> Welcome to Peak Mindset</h1>
        {children}
        <footer className="footer-layout">
          <h4>Copyright &copy; 2023 Peak Mindset   
          </h4>
        </footer>
      </body>
    </html>
  );
}
