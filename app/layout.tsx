import type { Metadata } from "next";
import { Anton, DM_Sans } from "next/font/google";

const anton = Anton({
  variable: "--heading-font",
  subsets: ["latin"],
  weight: ["400"],
});

const dmSans = DM_Sans({
  variable: "--body-font",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// bootstrap five
import "bootstrap/dist/css/bootstrap.min.css";

// font awesome 5 pro icons
import "@/public/icons/css/font-awesome.css";

// main styles
import "@/public/scss/app.scss";

// aos animations
import InitAnimations from "@/components/InitAnimations";

export const metadata: Metadata = {
  title: "Evantbiz - Conference & Events React NextJs Template",
  description: "Conference & Events React NextJs Template",
  keywords: [
    "conference",
    "event",
    "exhibition",
    "course",
    "seminar",
    "meeting",
  ],
  authors: [
    {
      name: "Tecursive",
      url: "https://themeforest.net/user/tecursive",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${dmSans.variable}`}>
        {children} <InitAnimations />
      </body>
    </html>
  );
}
