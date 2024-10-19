import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import store from "@/store";
import Providers from "@/store/providers";
import "react-toastify/dist/ReactToastify.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sianches",
  description: "this is an alamiah task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <Providers >
          
      <ToastContainer position='bottom-right'/>
 
        {children}
    </Providers>
      </body>
    </html>
  );
}
