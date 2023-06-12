import "./globals.css";
import { Inter } from "next/font/google";
import localFont from "@next/font/local";
import MatomoScript from "./components/MatomoScript";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ComBack",
  description: "Application de location",
};

const font = localFont({
  src: [
    {
      path: "../public/fonts/HurmeGeometricSans4 Black.otf",
      weight: "400",
    },
  ],
  variable: "--font-Hurme",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
      <MatomoScript />
    </html>
  );
}
