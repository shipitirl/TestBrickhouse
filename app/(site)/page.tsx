import Link from "next/link";
import { ArrowRight, Beer, CheckCircle2, MapPin, Utensils } from "lucide-react";

export default function Home() {
    return (
        <div className="flex flex-col gap-16 pb-16">
            {/* Hero Section */}
            <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-charcoal-900">
                <div className="absolute inset-0 z-0">
                    {/* Placeholder for Hero Image */}
                    <div className="h-full w-full bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-brick-900 opacity-50" />
                    <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="container relative z-10 mx-auto px-4 text-center md:px-6">
                    <h1 className="mb-6 font-display text-5xl font-bold uppercase tracking-tight text-white sm:text-7xl md:text-8xl">
                        <span className="text-brick-500">Brickhouse</span> <br />
                        Burgers & Brews
                    </h1>
                    <p className="mx-auto mb-8 max-w-2xl text-lg text-cream-100/90 sm:text-xl md:text-2xl">
                        Craft burgers, local Wisconsin ingredients, and 20+ beers on tap.
                        <br className="hidden sm:inline" /> The heart of De Pere’s food
                        scene.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link
                            href="/menu"
                            className="inline-flex h-12 items-center justify-center rounded-md bg-brick-600 px-8 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brick-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brick-500"
                        >
                            View Menu
                        </Link>
                        <a
                            href="https://brickhouseburgersandbrews.ordereze.net"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-12 items-center justify-center rounded-md border border-cream-100/20 bg-transparent px-8 text-sm font-bold uppercase tracking-wide text-cream-100 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cream-100"
                        >
                            Order Online
                        </a>
                    </div>
                </div>
            </section>

            {/* Local Ingredients Story */}
            <section className="container mx-auto px-4 md:px-6">
                <div className="grid gap-12 md:grid-cols-2 md:items-center">
                    <div className="space-y-6">
                        <h2 className="font-display text-4xl font-bold uppercase text-white sm:text-5xl">
                            Wisconsin Born, <br />
                            <span className="text-amber-500">Wisconsin Raised</span>
                        </h2>
                        <p className="text-lg text-cream-200/80">
                            We don&apos;t just say &quot;local&quot; — we live it. Our brioche buns are baked
                            fresh every morning right here in town. Our beef is a custom grind
                            of 100% Wisconsin-raised cattle from Otto&apos;s Meats. And our cheese?
                            You bet it&apos;s from the best dairies in the state.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="mt-1 h-6 w-6 text-brick-500" />
                                <div>
                                    <h3 className="font-bold text-white">Fresh Brioche Buns</h3>
                                    <p className="text-sm text-cream-200/60">
                                        Delivered daily for that perfect soft-yet-sturdy bite.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="mt-1 h-6 w-6 text-brick-500" />
                                <div>
                                    <h3 className="font-bold text-white">Local Craft Brews</h3>
                                    <p className="text-sm text-cream-200/60">
                                        Rotating taps featuring the best of Wisconsin&apos;s breweries.
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <Link
                            href="/about"
                            className="inline-flex items-center gap-2 text-brick-500 hover:text-brick-400 font-bold uppercase tracking-wide text-sm mt-4"
                        >
                            Read Our Story <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                    <div className="relative aspect-square overflow-hidden rounded-lg bg-charcoal-800">
                        {/* Placeholder for Ingredients Image */}
                        <div className="absolute inset-0 flex items-center justify-center text-cream-200/20">
                            <span className="font-display text-4xl font-bold uppercase">
                                Fresh Ingredients
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Menu Items */}
            <section className="bg-charcoal-950 py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 font-display text-4xl font-bold uppercase text-white sm:text-5xl">
                            Crowd Favorites
                        </h2>
                        <p className="mx-auto max-w-2xl text-cream-200/60">
                            From our signature stacks to our famous cheese curds, here&apos;s what
                            De Pere is eating.
                        </p>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Item 1 */}
                        <div className="group relative overflow-hidden rounded-lg bg-charcoal-900 p-6 transition-transform hover:-translate-y-1">
                            <div className="mb-4 flex h-48 items-center justify-center rounded bg-charcoal-800">
                                <Utensils className="h-12 w-12 text-brick-500/50" />
                            </div>
                            <h3 className="mb-2 font-display text-2xl font-bold text-white group-hover:text-brick-500 transition-colors">
                                The Brickhouse
                            </h3>
                            <p className="mb-4 text-sm text-cream-200/60">
                                Our signature patty topped with smoked gouda, bacon onion jam,
                                and house sauce on a toasted brioche bun.
                            </p>
                            <span className="inline-block rounded-full bg-brick-900/50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brick-400">
                                House Favorite
                            </span>
                        </div>
                        {/* Item 2 */}
                        <div className="group relative overflow-hidden rounded-lg bg-charcoal-900 p-6 transition-transform hover:-translate-y-1">
                            <div className="mb-4 flex h-48 items-center justify-center rounded bg-charcoal-800">
                                <Utensils className="h-12 w-12 text-brick-500/50" />
                            </div>
                            <h3 className="mb-2 font-display text-2xl font-bold text-white group-hover:text-brick-500 transition-colors">
                                Cheese Curds
                            </h3>
                            <p className="mb-4 text-sm text-cream-200/60">
                                Hand-battered fresh Wisconsin cheese curds, fried golden and
                                served with ranch.
                            </p>
                            <span className="inline-block rounded-full bg-amber-900/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-500">
                                Must Try
                            </span>
                        </div>
                        {/* Item 3 */}
                        <div className="group relative overflow-hidden rounded-lg bg-charcoal-900 p-6 transition-transform hover:-translate-y-1">
                            <div className="mb-4 flex h-48 items-center justify-center rounded bg-charcoal-800">
                                <Utensils className="h-12 w-12 text-brick-500/50" />
                            </div>
                            <h3 className="mb-2 font-display text-2xl font-bold text-white group-hover:text-brick-500 transition-colors">
                                Blueberry Bison
                            </h3>
                            <p className="mb-4 text-sm text-cream-200/60">
                                Lean bison patty, blueberry compote, goat cheese, and arugula. A
                                sweet and savory masterpiece.
                            </p>
                            <span className="inline-block rounded-full bg-charcoal-800 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cream-200/60">
                                Unique
                            </span>
                        </div>
                    </div>
                    <div className="mt-12 text-center">
                        <Link
                            href="/menu"
                            className="inline-flex h-12 items-center justify-center rounded-md border border-brick-500 text-brick-500 px-8 text-sm font-bold uppercase tracking-wide transition-colors hover:bg-brick-500 hover:text-white"
                        >
                            View Full Menu
                        </Link>
                    </div>
                </div>
            </section>

            {/* Banquet Teaser */}
            <section className="container mx-auto px-4 md:px-6">
                <div className="relative overflow-hidden rounded-2xl bg-brick-900 px-6 py-16 text-center sm:px-12 sm:py-24">
                    <div className="relative z-10 mx-auto max-w-3xl">
                        <h2 className="mb-6 font-display text-4xl font-bold uppercase text-white sm:text-5xl">
                            Host Your Next Event
                        </h2>
                        <p className="mb-8 text-lg text-brick-100">
                            From birthday bashes to corporate meetings, our private banquet
                            room is the perfect spot for your gathering. We handle the food
                            and drinks; you handle the fun.
                        </p>
                        <Link
                            href="/banquet-room"
                            className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-bold uppercase tracking-wide text-brick-900 transition-colors hover:bg-cream-100"
                        >
                            Learn More
                        </Link>
                    </div>
                    {/* Decorative pattern */}
                    <div className="absolute inset-0 z-0 opacity-10 bg-[url('/pattern.svg')]"></div>
                </div>
            </section>

            {/* Location Snapshot */}
            <section className="container mx-auto px-4 md:px-6">
                <div className="grid gap-8 md:grid-cols-2">
                    <div className="rounded-lg bg-charcoal-900 p-8">
                        <div className="mb-6 flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brick-500/20 text-brick-500">
                                <MapPin className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-display text-xl font-bold text-white">
                                    Find Us
                                </h3>
                                <p className="text-cream-200/60">Downtown De Pere</p>
                            </div>
                        </div>
                        <address className="mb-6 not-italic text-cream-200/80">
                            500 Main Ave <br />
                            De Pere, WI 54115
                        </address>
                        <Link
                            href="/location"
                            className="text-sm font-bold uppercase tracking-wide text-brick-500 hover:text-brick-400"
                        >
                            Get Directions &rarr;
                        </Link>
                    </div>
                    <div className="rounded-lg bg-charcoal-900 p-8">
                        <div className="mb-6 flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/20 text-amber-500">
                                <Beer className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-display text-xl font-bold text-white">
                                    Open Hours
                                </h3>
                                <p className="text-cream-200/60">Come grab a pint</p>
                            </div>
                        </div>
                        <ul className="space-y-2 text-sm text-cream-200/80">
                            <li className="flex justify-between">
                                <span>Mon - Thu</span>
                                <span>11:00 AM - 10:00 PM</span>
                            </li>
                            <li className="flex justify-between font-bold text-white">
                                <span>Fri - Sat</span>
                                <span>11:00 AM - 11:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sun</span>
                                <span>11:00 AM - 9:00 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
