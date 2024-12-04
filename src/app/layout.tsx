import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const dos = localFont({
  src: "./fonts/dos.ttf",
  variable: "--fontP",
  weight: "100 200 300 400 500 600 700 800 900",
});
const shaped = localFont({
  src: "./fonts/shaped.otf",
  variable: "--fontH",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "Abstract Creator",
  description: " app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${shaped.variable} ${dos.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
