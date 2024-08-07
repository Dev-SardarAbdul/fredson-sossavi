import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/src/components/sidebar";
import Navbar from "@/src/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fredson Sossavi",
  description: "Fredson Sossavi App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container gap-8 mx-auto px-4 py-4">
          <Navbar />
          <div className="flex justify-start items-start mt-8">
            <Sidebar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
