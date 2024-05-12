import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/components/query-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "500", "400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "FTC MMI",
  description: "FTC Market Mood Index",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.png" />
        </head>
        <body className={poppins.className}>{children}</body>
      </html>
    </QueryProvider>
  );
}
