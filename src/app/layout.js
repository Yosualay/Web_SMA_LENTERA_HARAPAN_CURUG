import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Sekolah Lentera Harapan",
    template: "%s | Sekolah Lentera Harapan",
  },
  description:
    "Sekolah Lentera Harapan mendampingi setiap siswa untuk bertumbuh, belajar, dan menjadi terang bagi sesama.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${geistSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
