import { DM_Sans, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});


export const metadata = {
  title: "Ovais Sharif — Frontend Engineer",
  description: "Ovais Sharif is a frontend engineer building thoughtful, high-performance digital products with React and Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable} ${jetBrainsMono.variable} scroll-smooth`}>
      <body className="antialiased leading-8 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
