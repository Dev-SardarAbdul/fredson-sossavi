import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/src/components/sidebar";
import Navbar from "@/src/components/navbar";

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
      <body>
        <div className="container gap-8 mx-auto px-4 py-4">
          <Navbar />
          <div className="flex justify-start items-start mt-6 md:mt-12">
            <Sidebar />
            <div className="w-full min-w-0">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
