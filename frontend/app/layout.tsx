import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chat App",
  description: "A chat app built with Next.js and WebSockets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
