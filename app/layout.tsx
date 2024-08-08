import React from "react";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yuri-seongsu-wedding.vercel.app/"),
  title: "유리🤍성수 결혼해요!",
  description: "2024년 10월 12일 토요일 12시, 세상의 모든 아침, 여의도",
  openGraph: {
    images: [{ url: "/meta.jpeg" }],
  },
  twitter: {
    images: [{ url: "/meta.jpeg" }],
  },
  icons: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/icons/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/icons/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/icons/favicon-16x16.png",
    },
    {
      rel: "mask-icon",
      url: "/icons/safari-pinned-tab.svg",
      color: "#5bbad5",
    },
  ],
  manifest: "/icons/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={"ko"}>
      <body>{children}</body>
    </html>
  );
}
