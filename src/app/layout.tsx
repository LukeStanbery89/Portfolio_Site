import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: {
        default: "Luke Stanbery - Portfolio",
        template: "%s | Luke Stanbery",
    },
    description: "Portfolio and blog of Luke Stanbery - Software Engineer",
    keywords: ["portfolio", "blog", "software engineer", "web development"],
    authors: [{ name: "Luke Stanbery" }],
    creator: "Luke Stanbery",
    metadataBase: new URL("https://lukestanbery.com"),
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://lukestanbery.com",
        siteName: "Luke Stanbery",
        title: "Luke Stanbery - Portfolio",
        description: "Portfolio and blog of Luke Stanbery - Software Engineer",
    },
    twitter: {
        card: "summary_large_image",
        title: "Luke Stanbery - Portfolio",
        description: "Portfolio and blog of Luke Stanbery - Software Engineer",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.variable} font-sans antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {/* Skip to main content link for accessibility */}
                    <a
                        href="#main-content"
                        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-4 focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                        Skip to main content
                    </a>
                    <div className="flex min-h-screen flex-col">
                        <Header />
                        <main id="main-content" className="flex-1">{children}</main>
                        <Footer />
                    </div>
                </ThemeProvider>
                <Analytics />
            </body>
        </html>
    );
}
