import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-charcoal-950 py-12 text-cream-100">
            <div className="container mx-auto grid gap-8 px-4 md:grid-cols-3 md:px-6">
                <div className="space-y-4">
                    <h3 className="font-display text-xl font-bold text-brick-500">
                        Brickhouse Burgers & Brews
                    </h3>
                    <p className="text-sm text-cream-200/80">
                        Your neighborhood burger lab with a Wisconsin heart. Proudly serving
                        De Pere & the Greater Green Bay area.
                    </p>
                    <div className="flex gap-4">
                        <Link
                            href="#"
                            className="text-cream-200/60 hover:text-amber-500 transition-colors"
                        >
                            <Facebook className="h-5 w-5" />
                            <span className="sr-only">Facebook</span>
                        </Link>
                        <Link
                            href="#"
                            className="text-cream-200/60 hover:text-amber-500 transition-colors"
                        >
                            <Instagram className="h-5 w-5" />
                            <span className="sr-only">Instagram</span>
                        </Link>
                    </div>
                </div>
                <div className="space-y-4">
                    <h3 className="font-display text-lg font-bold">Contact & Location</h3>
                    <div className="space-y-2 text-sm text-cream-200/80">
                        <div className="flex items-start gap-2">
                            <MapPin className="h-4 w-4 mt-1 text-brick-500" />
                            <address className="not-italic">
                                500 Main Ave
                                <br />
                                De Pere, WI 54115
                            </address>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-brick-500" />
                            <a href="tel:+19203382337" className="hover:text-amber-500">
                                (920) 338-2337
                            </a>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <h3 className="font-display text-lg font-bold">Quick Links</h3>
                    <nav className="flex flex-col gap-2 text-sm text-cream-200/80">
                        <Link href="/menu" className="hover:text-amber-500">
                            Menu
                        </Link>
                        <Link href="/banquet-room" className="hover:text-amber-500">
                            Banquet Room
                        </Link>
                        <Link href="/about" className="hover:text-amber-500">
                            Our Story
                        </Link>
                        <Link href="/contact" className="hover:text-amber-500">
                            Contact Us
                        </Link>
                    </nav>
                </div>
            </div>
            <div className="container mx-auto mt-12 border-t border-white/10 px-4 pt-8 text-center text-xs text-cream-200/40">
                <p>
                    &copy; {new Date().getFullYear()} Brickhouse Burgers and Brews. All
                    rights reserved.
                </p>
            </div>
        </footer>
    );
}
