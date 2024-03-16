import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/provider/TransitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MovieCritic: Vipin Sharma",
  description: "Let's Review",
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
