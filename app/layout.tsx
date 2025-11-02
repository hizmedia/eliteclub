import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  El_Messiri,
  Poppins,
} from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

// Font setup
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const elMessiri = El_Messiri({
  variable: "--font-el-messiri",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"], // optional
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // optional
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elite Clubhouse & Biliards",
  description: "Where Families Gather & Friendships Grow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${elMessiri.variable}
          ${poppins.variable}
          antialiased
        `}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
