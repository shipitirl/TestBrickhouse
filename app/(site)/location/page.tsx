import type { Metadata } from "next";
import { hoursData } from "@/data/hours";
import { MapPin, Phone, Clock, Car } from "lucide-react";

export const metadata: Metadata = {
    title: "Location & Hours",
    description:
        "Find Brickhouse Burgers and Brews in downtown De Pere, WI. Check our opening hours and get directions.",
};

export default function LocationPage() {
    return (
        <div className="pb-20 pt-10">
            <div className="container mx-auto px-4 md:px-6">
                <h1 className="mb-12 text-center font-display text-5xl font-bold uppercase text-white sm:text-6xl">
                    Find <span className="text-brick-500">Us</span>
                </h1>

                <div className="grid gap-8 lg:grid-cols-3">
                    {/* Info Column */}
                    <div className="space-y-8 lg:col-span-1">
                        <div className="rounded-lg bg-charcoal-900 p-8">
                            <div className="mb-6 flex items-center gap-4">
                                <MapPin className="h-6 w-6 text-brick-500" />
                                <h2 className="font-display text-2xl font-bold text-white">
                                    Address
                                </h2>
                            </div>
                            <address className="not-italic text-cream-200/80">
                                500 Main Ave <br />
                                De Pere, WI 54115
                            </address>
                            <div className="mt-6">
                                <h3 className="mb-2 font-bold text-white flex items-center gap-2">
                                    <Car className="h-4 w-4 text-amber-500" /> Parking
                                </h3>
                                <p className="text-sm text-cream-200/60">
                                    Street parking is available on Main Ave. Additional public
                                    parking can be found in the lot behind the building.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-lg bg-charcoal-900 p-8">
                            <div className="mb-6 flex items-center gap-4">
                                <Clock className="h-6 w-6 text-amber-500" />
                                <h2 className="font-display text-2xl font-bold text-white">
                                    Hours
                                </h2>
                            </div>
                            <ul className="space-y-3 text-sm text-cream-200/80">
                                {hoursData.map((item) => (
                                    <li key={item.day} className="flex justify-between border-b border-white/5 pb-2 last:border-0 last:pb-0">
                                        <span className="font-medium">{item.day}</span>
                                        <span>
                                            {item.isClosed ? "Closed" : `${item.open} - ${item.close}`}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-lg bg-charcoal-900 p-8">
                            <div className="mb-6 flex items-center gap-4">
                                <Phone className="h-6 w-6 text-brick-500" />
                                <h2 className="font-display text-2xl font-bold text-white">
                                    Contact
                                </h2>
                            </div>
                            <p className="mb-4 text-sm text-cream-200/80">
                                Have a question? Give us a call.
                            </p>
                            <a
                                href="tel:+19203382337"
                                className="text-xl font-bold text-white hover:text-amber-500 transition-colors"
                            >
                                (920) 338-2337
                            </a>
                        </div>
                    </div>

                    {/* Map Column */}
                    <div className="lg:col-span-2">
                        <div className="h-full min-h-[400px] w-full overflow-hidden rounded-lg bg-charcoal-800">
                            {/* Google Maps Placeholder */}
                            {/* TODO: Replace with actual Google Maps Embed iframe */}
                            <div className="flex h-full w-full items-center justify-center bg-charcoal-800 text-cream-200/20">
                                <div className="text-center">
                                    <MapPin className="mx-auto mb-4 h-16 w-16" />
                                    <span className="font-display text-2xl font-bold uppercase">
                                        Google Maps Embed
                                    </span>
                                    <p className="mt-2 text-sm">
                                        Embed code goes here
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
