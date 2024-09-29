import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionProvider from "@/components/Auth/SessionProvider";
import DatabaseConnection from "../db/config";
import { Toaster } from "react-hot-toast";
import QueryProvider from "../components/QueryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BoilaPlate",
  description: "This is a SAAS Next.js Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  (async () => {
    await DatabaseConnection();
  })();
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <QueryProvider>
            {children}

            <ReactQueryDevtools initialIsOpen={false} />
          </QueryProvider>
        </SessionProvider>

        <Toaster />
      </body>
    </html>
  );
}
