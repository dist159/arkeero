import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/ui/components/header/header";
import "./globals.css";
import { ClientsProvider } from "@/providers/clients/clients.provider";
import { ModalProvider } from "@/providers/modal/modal.provider";
import Modal from "@/ui/components/modal/modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arkeero",
  description: "Arkerro web page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ModalProvider>
        <ClientsProvider>
          <body className={inter.className}>
            <Header />
            <Modal />
            {children}
          </body>
        </ClientsProvider>
      </ModalProvider>
    </html>
  );
}
