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
                    <div className="flex min-h-screen flex-col">
                        <Header />
                        <main className="flex-1">{children}</main>
                        <Footer />
                    </div>
                </ThemeProvider>
                <Analytics />
            </body>
        </html>
    );
}
