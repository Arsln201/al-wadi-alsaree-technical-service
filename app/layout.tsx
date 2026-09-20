// The CSS file is processed by Next.js and does not need a TypeScript module declaration.

import "./globals.css";
import Navbar from "../components/Navbar";
import ScrollProgress from "../components/ScrollProgress";
import BackToTop from "../components/BackToTop";
import CursorGlow from "../components/CursorGlow";
import Preloader from "../components/Preloader";

export const metadata = {
  title: "A L WADI ALSAREE TECHNICAL SERVICE L.L.C",
  description: "Professional technical services and maintenance solutions."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ScrollProgress />
        <Navbar />
        {children}
        <BackToTop />
        <CursorGlow />
        <Preloader />
      </body>
    </html>
  );
}
