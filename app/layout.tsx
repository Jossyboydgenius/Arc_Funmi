import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Arc Funmi - Where Built World Shares Ideas",
  description: "A knowledge hub for architects, engineers and construction pros to read, write and share insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.className}>
      <body 
        className="antialiased"
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
