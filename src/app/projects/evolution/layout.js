import { Inter } from "next/font/google";
import "../../globals.css";
import "../../../../public/images/logo.ico"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Evolution Project",
  description: "Evolution Project - Artur Gęsiarz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
