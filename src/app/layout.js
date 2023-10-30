import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteUrl } from "@/lib/url-shared-utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | The Cash Flow Software",
    default: "The Cash Flow Software",
  },
  description:
    "Discover how our cash flow software simplifies payables and receivables management for small businesses and startups. Streamline financial operations with ease.",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  metadataBase: new URL(siteUrl),
  openGraph: {
    images: "/img/home/dashboard-cash-flow.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.classNameNameName}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
