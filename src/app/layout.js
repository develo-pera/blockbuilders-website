import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blockbuilde.rs";

export const metadata = {
  title: "BlockBuilders - The genesis edition",
  description:
    "BlockBuilders - The genesis eidtion is an educational board game teaching players how blockchains and blockchain components works. Learn fundementals of blockchains and web3 in a fun way with your friends while playing the game.",
  openGraph: {
    title: "BlockBuilders - The genesis edition",
    description:
      "BlockBuilders - The genesis eidtion is an educational board game teaching players how blockchains and blockchain components works. Learn fundementals of blockchains and web3 in a fun way with your friends while playing the game.",
    images: "https://blockbuilde.rs/og-image.png",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "BlockBuilders - The genesis edition",
    description:
      "BlockBuilders - The genesis eidtion is an educational board game teaching players how blockchains and blockchain components works. Learn fundementals of blockchains and web3 in a fun way with your friends while playing the game.",
    images: "https://blockbuilde.rs/og-image.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
