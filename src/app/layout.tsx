"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { usePathname } from "next/navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/register";

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="h-full font-sans bg-[#F3F4F6] text-slate-800 flex overflow-hidden">
        {!isAuthPage && <Sidebar />}
        <div className="flex-1 flex flex-col h-full overflow-hidden">
          {!isAuthPage && <Header />}
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
