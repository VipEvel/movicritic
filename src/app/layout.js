import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/provider/TransitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio - Vipin Sharma",
  description: "Let's Build Together",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
