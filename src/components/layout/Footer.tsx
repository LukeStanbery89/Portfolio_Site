"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Twitter, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
    {
        name: "GitHub",
        href: "https://github.com/lukestanbery",
        icon: Github,
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com/in/lukestanbery",
        icon: Linkedin,
    },
    {
        name: "Twitter",
        href: "https://twitter.com/lukestanbery",
        icon: Twitter,
    },
    {
        name: "Email",
        href: "mailto:hello@lukestanbery.com",
        icon: Mail,
    },
];

export function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="border-t bg-background">
            <div className="container py-8 md:py-12">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.name}
                            >
                                <Button variant="ghost" size="icon">
                                    <link.icon className="h-5 w-5" />
                                </Button>
                            </Link>
                        ))}
                    </div>

                    {/* Copyright */}
                    <div className="text-center text-sm text-muted-foreground">
                        <p>© {currentYear} Luke Stanbery. All rights reserved.</p>
                    </div>

                    {/* Back to Top Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={scrollToTop}
                        aria-label="Back to top"
                        className="hidden md:flex"
                    >
                        <ArrowUp className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </footer>
    );
}
