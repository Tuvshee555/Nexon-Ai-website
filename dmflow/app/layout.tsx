import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexon Nova — Facebook & Instagram чат автоматжуулалт",
  description:
    "Nexon Nova нь таны Facebook, Instagram мессежийг 24/7 автоматаар хариулж, лидүүдийг цуглуулж, борлуулалтыг нэмэгдүүлдэг.",
  keywords: "chatbot, facebook automation, instagram automation, AI chatbot Mongolia, Монгол чатбот, мессеж автоматжуулалт",
  openGraph: {
    title: "Nexon Nova — Чат автоматжуулалт",
    description: "24/7 мессеж автоматжуулалт. Лид алдахаа болих цаг болжээ.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="mn" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
