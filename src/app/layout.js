import { Inter } from "next/font/google";
import "./globals.css";

import localFont from "next/font/local";
const myFont = localFont({
  src: "./font/Exo2-VariableFont_wght.ttf" ,
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
            <head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"/>
      </head>
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
