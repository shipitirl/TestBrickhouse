"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-charcoal-900/95 backdrop-blur supports-[backdrop-filter]:bg-charcoal-900/60">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2">
                    <span className="font-display text-2xl font-bold uppercase tracking-wider text-brick-500">
                        Brickhouse
                    </span>
                    <span className="hidden font-sans text-sm font-medium text-cream-100 sm:inline-block">
                        Burgers & Brews
                    </span>
                </Link>
                <nav className="hidden md:flex items-center gap-8">
                    <Link
                        href="/menu"
                        className="text-sm font-medium text-cream-100 hover:text-amber-500 transition-colors"
                    >
                        Menu
                    </Link>
                    <Link
                        href="/about"
                        className="text-sm font-medium text-cream-100 hover:text-amber-500 transition-colors"
                    >
                        About
                    </Link>
                    <Link
                        href="/banquet-room"
                        className="text-sm font-medium text-cream-100 hover:text-amber-500 transition-colors"
                    >
                        Banquet Room
                    </Link>
                    <Link
                        href="/location"
                        className="text-sm font-medium text-cream-100 hover:text-amber-500 transition-colors"
                    >
                        Location
                    </Link>
                    <Link
                        href="/contact"
                        className="text-sm font-medium text-cream-100 hover:text-amber-500 transition-colors"
                    >
                        Contact
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <a
                        href="https://brickhouseburgersandbrews.ordereze.net"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden rounded-md bg-brick-600 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-brick-700 sm:inline-flex"
                    >
                        Order Online
                    </a>
                    <button
                        className="md:hidden text-cream-100"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                        <span className="sr-only">Toggle menu</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="absolute left-0 top-20 w-full border-b border-white/10 bg-charcoal-900 px-4 py-6 md:hidden">
                    <nav className="flex flex-col gap-4">
                        <Link
                            href="/menu"
                            className="text-lg font-medium text-cream-100 hover:text-amber-500"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Menu
                        </Link>
                        <Link
                            href="/about"
                            className="text-lg font-medium text-cream-100 hover:text-amber-500"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href="/banquet-room"
                            className="text-lg font-medium text-cream-100 hover:text-amber-500"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Banquet Room
                        </Link>
                        <Link
                            href="/location"
                            className="text-lg font-medium text-cream-100 hover:text-amber-500"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Location
                        </Link>
                        <Link
                            href="/contact"
                            className="text-lg font-medium text-cream-100 hover:text-amber-500"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </Link>
                        <a
                            href="https://brickhouseburgersandbrews.ordereze.net"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 inline-flex justify-center rounded-md bg-brick-600 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-brick-700"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Order Online
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
