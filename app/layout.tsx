import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GitHub Hiring Signal Tracker",
  description: "Track engineering hiring signals from GitHub activity. Monitor repos for team growth, new contributors, and project scaling — built for B2B sales teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ff6a9f22-498c-48d9-a556-1012be35d0c6"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
