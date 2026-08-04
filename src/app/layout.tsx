import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { NavBar } from "@/components/NavBar";
import { AmbientBackground } from "@/components/AmbientBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Desmond Egya | Full Stack Developer",
  description:
    "Full-stack developer based in Nigeria, building web and mobile products end-to-end.",
  keywords: [
    "full-stack developer",
    "React",
    "Next.js",
    "NestJS",
    "React Native",
    "web development",
    "portfolio",
  ],
  authors: [{ name: "Desmond Egya" }],
  metadataBase: new URL("https://desmondegya.vercel.app"),
  openGraph: {
    title: "Desmond Egya | Full Stack Developer",
    description:
      "Full-stack developer based in Nigeria, building web and mobile products end-to-end.",
    url: "https://desmondegya.vercel.app",
    siteName: "Desmond Egya",
    type: "website",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <AmbientBackground />
          <NavBar />
          <main className="mx-auto max-w-5xl px-5 md:px-8">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
