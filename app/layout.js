import "./globals.css";
import { Fraunces, Manrope } from "next/font/google";

const display = Fraunces({ subsets: ["latin"], variable: "--font-display" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body" });

export const metadata = {
  title: "Cup2Eat | Finish your drink, then finish the cup",
  description: "Edible cups for coffee, chai, smoothies and soups. Zero waste, made to be eaten.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
