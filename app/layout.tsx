import { ThemeProvider } from "@/components/contexts/theme-provider";
import "@/styles/globals.css";
import { Navbar } from "@/components/navbar";
import { GeistSans } from "geist/font/sans";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/toaster";
import type React from "react";
import type { Metadata, Viewport } from "next"

const APP_NAME = "Git Me";
const APP_DEFAULT_TITLE = "Learn Git and Github: Beginner's Guide.";
const APP_TITLE_TEMPLATE = "%s - Git Me";
const APP_DESCRIPTION = "-- It is designed to be simple and easy to understand for beginners.";
export const metadata: Metadata = {
  applicationName: APP_NAME,
  metadataBase: new URL("https://www.gitme.live"),
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  keywords: ["git beginner's guide", "learn git with me", "learn git and github", "git tutorial", "learn git", "git for beginners", "version control basics"],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    url: "https://www.gitme.live",
    images: [
      {
        url: '/og.png',
      },
    ],
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="sm:container mx-auto w-[90vw] h-auto">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <Toaster />
        <Analytics />
        <SpeedInsights/>
      </body>
    </html>
  );
}
