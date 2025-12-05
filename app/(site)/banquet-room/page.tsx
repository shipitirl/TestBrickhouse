import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Check, Music, Users, Utensils } from "lucide-react";

export const metadata: Metadata = {
    title: "Banquet Room",
    description:
        "Host your next event at Brickhouse Burgers and Brews. Our private banquet room is perfect for parties, corporate events, and rehearsal dinners.",
};

export default function BanquetPage() {
    return (
        <div className="pb-20 pt-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="mb-6 font-display text-5xl font-bold uppercase text-white sm:text-6xl">
                        Private <span className="text-brick-500">Events</span>
                    </h1>
                    <p className="mx-auto mb-8 max-w-2xl text-lg text-cream-200/80">
                        Looking for the perfect spot for your next gathering? Our private
                        banquet room offers a cozy, exclusive atmosphere with the same great
                        food and service you love.
                    </p>
                    <Link
                        href="/contact?subject=Banquet Inquiry"
                        className="inline-flex h-12 items-center justify-center rounded-md bg-brick-600 px-8 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brick-700"
                    >
                        Request Information
                    </Link>
                </div>

                <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:items-center">
                    <div className="relative aspect-video overflow-hidden rounded-lg bg-charcoal-800 lg:aspect-square">
                        <Image
                            src="/partyroombrickhouse.png"
                            alt="Brickhouse Banquet Room"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="space-y-8">
                        <div>
                            <h2 className="mb-4 font-display text-3xl font-bold uppercase text-white">
                                Perfect For Any Occasion
                            </h2>
                            <p className="text-cream-200/80">
                                Whether it&apos;s a birthday bash, a corporate meeting, or a
                                rehearsal dinner, we&apos;ve got you covered. Our flexible space can
                                be configured to suit your needs.
                            </p>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-amber-500">
                                    <Users className="h-5 w-5" />
                                    <h3 className="font-bold text-white">Capacity</h3>
                                </div>
                                <p className="text-sm text-cream-200/60">
                                    Up to 50 guests seated comfortably.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-amber-500">
                                    <Music className="h-5 w-5" />
                                    <h3 className="font-bold text-white">A/V Equipment</h3>
                                </div>
                                <p className="text-sm text-cream-200/60">
                                    Large screen TVs and sound system available.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-amber-500">
                                    <Utensils className="h-5 w-5" />
                                    <h3 className="font-bold text-white">Catering</h3>
                                </div>
                                <p className="text-sm text-cream-200/60">
                                    Customizable menus, buffets, or plated options.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-lg bg-charcoal-900 p-6">
                            <h3 className="mb-4 font-bold text-white">Popular For:</h3>
                            <ul className="grid gap-2 sm:grid-cols-2">
                                {[
                                    "Birthday Parties",
                                    "Corporate Meetings",
                                    "Team Dinners",
                                    "Rehearsal Dinners",
                                    "Holiday Parties",
                                    "Graduation Parties",
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-sm text-cream-200/80">
                                        <Check className="h-4 w-4 text-brick-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
