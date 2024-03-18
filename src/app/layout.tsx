import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "./my_components/NavBar";
// import NavBar from "./my_components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`light ${inter.className} overflow-x-hidden`}>
      {/* <body className=''> */}
      <NavBar/>
      {children}
      </body>
    </html>
  );
}
