import type { Metadata } from "next";
import Link from "next/link";
import { Users, Heart, Award } from "lucide-react";

export const metadata: Metadata = {
    title: "Our Story",
    description:
        "Learn about Brickhouse Burgers and Brews' journey from humble beginnings to De Pere's favorite burger spot. Locally sourced, community focused.",
};

export default function AboutPage() {
    return (
        <div className="pb-20 pt-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="mb-6 font-display text-5xl font-bold uppercase text-white sm:text-6xl">
                        More Than Just <span className="text-brick-500">Burgers</span>
                    </h1>
                    <p className="text-xl text-cream-200/80">
                        We&apos;re a neighborhood joint built on a simple promise: honest food,
                        cold beer, and a place where everyone knows your name.
                    </p>
                </div>

                <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:items-center">
                    <div className="space-y-6">
                        <h2 className="font-display text-3xl font-bold uppercase text-white">
                            Our Story
                        </h2>
                        <div className="space-y-4 text-cream-200/80">
                            <p>
                                It started with a craving. Not just for a burger, but for a
                                *better* burger. We wanted to create something that honored the
                                classic Wisconsin tavern tradition but elevated it with a chef&apos;s
                                touch.
                            </p>
                            <p>
                                From our humble beginnings experimenting with patty blends and
                                sauce recipes in a small kitchen, Brickhouse has grown into a
                                staple of the De Pere community. We&apos;ve seen first dates turn
                                into anniversaries, little league celebrations, and countless
                                Packers game days.
                            </p>
                            <p>
                                We aren&apos;t a franchise. We&apos;re your neighbors. And we believe that
                                great food brings people together like nothing else can.
                            </p>
                        </div>
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-lg bg-charcoal-800 lg:aspect-square">
                        {/* Placeholder for Team/Interior Image */}
                        <div className="absolute inset-0 flex items-center justify-center text-cream-200/20">
                            <span className="font-display text-2xl font-bold uppercase">
                                Brickhouse Team
                            </span>
                        </div>
                    </div>
                </div>

                <div className="mt-20">
                    <h2 className="mb-12 text-center font-display text-3xl font-bold uppercase text-white">
                        The Brickhouse Standard
                    </h2>
                    <div className="grid gap-8 sm:grid-cols-3">
                        <div className="rounded-lg bg-charcoal-900 p-8 text-center">
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brick-500/10 text-brick-500">
                                <Heart className="h-8 w-8" />
                            </div>
                            <h3 className="mb-3 font-display text-xl font-bold text-white">
                                Local Love
                            </h3>
                            <p className="text-sm text-cream-200/60">
                                We source our beef from Otto&apos;s Meats and our cheese from local
                                Wisconsin dairies. When you eat here, you support local farmers.
                            </p>
                        </div>
                        <div className="rounded-lg bg-charcoal-900 p-8 text-center">
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
                                <Users className="h-8 w-8" />
                            </div>
                            <h3 className="mb-3 font-display text-xl font-bold text-white">
                                Community First
                            </h3>
                            <p className="text-sm text-cream-200/60">
                                We&apos;re proud to be part of De Pere. From sponsoring local teams
                                to hosting charity events, we give back to the town that
                                supports us.
                            </p>
                        </div>
                        <div className="rounded-lg bg-charcoal-900 p-8 text-center">
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-cream-100/10 text-cream-100">
                                <Award className="h-8 w-8" />
                            </div>
                            <h3 className="mb-3 font-display text-xl font-bold text-white">
                                Quality Obsessed
                            </h3>
                            <p className="text-sm text-cream-200/60">
                                Fresh, never frozen. Brioche buns baked daily. Sauces made in
                                house. We don&apos;t cut corners, and you can taste the difference.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-20 flex flex-col items-center justify-center gap-6 rounded-2xl bg-brick-900 px-6 py-12 text-center sm:px-12">
                    <h2 className="font-display text-3xl font-bold uppercase text-white">
                        Come Taste the Difference
                    </h2>
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <Link
                            href="/menu"
                            className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-bold uppercase tracking-wide text-brick-900 transition-colors hover:bg-cream-100"
                        >
                            Check out the Menu
                        </Link>
                        <Link
                            href="/banquet-room"
                            className="inline-flex h-12 items-center justify-center rounded-md border border-white/20 bg-transparent px-8 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/10"
                        >
                            Plan Your Event
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
