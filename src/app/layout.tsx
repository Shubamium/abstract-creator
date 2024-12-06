import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import GummySpawn from "./components/gummySpawn/GummySpawn";

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

const title = "GUMMYGoods";

const description =
  "  AbstractCreator0 website showcases a variety of artistic designs on products like clothing, accessories, and a debut mug set for a tiny me. The designs often feature abstract patterns and vibrant colors, making each item visually striking but the bag I hate the bag bag can go somewhere else honestly for the product I made but I hate how cheap it looks. Fans of lore will love this website. There is a hold page for it. Ever wonder how they become a human you can read about it. That's not all you can find out about my height, weight and how long it takes me to melt you all so can leave comments that are so crazy.";
const banner =
  "https://i.ibb.co.com/yYX1bpt/2-AE74089-A19-D-4345-AED1-B0-DDAA66-F3-DF.jpg";
const url = "https://abstractcreator.vercel.app";

export const metadata: Metadata = {
  title: title,

  metadataBase: new URL(url),

  openGraph: {
    url: url,
    title: title,
    description: description,
    authors: "shubamium",
    images: [banner],
  },
  twitter: {
    title: title,
    card: "summary_large_image",
    images: [banner],
  },
  description: description,
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
        <GummySpawn />
      </body>
    </html>
  );
}
