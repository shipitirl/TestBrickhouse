"use client";

import { menuData, disclaimers, MenuItem } from "@/data/menu";
import { Printer, X, Camera } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function MenuPage() {
    const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

    return (
        <div className="pb-20 pt-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="mb-6 font-display text-5xl font-bold uppercase text-white sm:text-6xl">
                        Our <span className="text-brick-500">Menu</span>
                    </h1>
                    <p className="mx-auto mb-8 max-w-2xl text-lg text-cream-200/80">
                        Welcome to De Pere&apos;s premier craft burger bar. We take pride in
                        serving Wisconsin-sourced burgers, fresh cheese curds, and a wide
                        selection of local beers.
                    </p>
                    <div className="flex justify-center">
                        <Link
                            href="/print-menu"
                            className="inline-flex items-center gap-2 rounded-md border border-brick-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-brick-500 transition-colors hover:bg-brick-500 hover:text-white"
                        >
                            <Printer className="h-4 w-4" />
                            Printable Version
                        </Link>
                    </div>
                </div>

                <div className="mt-16 space-y-16">
                    {menuData.map((category) => (
                        <section
                            key={category.title}
                            className="scroll-mt-24"
                            id={category.title.toLowerCase().replace(/\s+/g, "-")}
                        >
                            <div className="mb-8 border-b border-white/10 pb-4">
                                <h2 className="font-display text-3xl font-bold uppercase text-amber-500">
                                    {category.title}
                                </h2>
                                {category.note && (
                                    <p className="mt-2 text-sm italic text-cream-200/60">
                                        {category.note}
                                    </p>
                                )}
                            </div>

                            <div className="grid gap-x-8 gap-y-10 md:grid-cols-2">
                                {category.items.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative cursor-pointer rounded-lg p-2 transition-colors hover:bg-white/5"
                                        onClick={() => setSelectedItem(item)}
                                    >
                                        <div className="mb-1 flex items-baseline justify-between">
                                            <h3 className="font-display text-xl font-bold text-white group-hover:text-brick-500 transition-colors">
                                                {item.name}
                                            </h3>
                                            {item.price && (
                                                <span className="font-sans text-lg font-bold text-brick-400">
                                                    {item.price}
                                                </span>
                                            )}
                                        </div>
                                        {item.description && (
                                            <p className="text-cream-200/70">{item.description}</p>
                                        )}
                                        {item.tags && (
                                            <div className="mt-2 flex flex-wrap gap-2">
                                                {item.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="rounded-full bg-white/5 px-2 py-0.5 text-xs font-medium text-cream-200/50"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                        {item.image && (
                                            <div className="absolute right-2 top-2 opacity-0 transition-opacity group-hover:opacity-100">
                                                <Camera className="h-5 w-5 text-brick-500" />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* BYOB Section */}
                            {category.isByob && category.byobOptions && (
                                <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                                    {category.byobOptions.map((option) => (
                                        <div
                                            key={option.category}
                                            className="rounded-lg bg-charcoal-800 p-4"
                                        >
                                            <h4 className="mb-3 font-display text-lg font-bold text-brick-500">
                                                {option.category}
                                            </h4>
                                            <ul className="space-y-1 text-sm text-cream-200/80">
                                                {option.items.map((optItem) => (
                                                    <li key={optItem}>{optItem}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </section>
                    ))}
                </div>

                {/* Disclaimers */}
                <div className="mt-20 border-t border-white/10 pt-8 text-center">
                    <div className="mx-auto max-w-3xl space-y-4 text-sm text-cream-200/40">
                        {disclaimers.map((disclaimer, index) => (
                            <p key={index}>{disclaimer}</p>
                        ))}
                    </div>
                </div>
            </div>

            {/* Image Modal */}
            {selectedItem && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
                    onClick={() => setSelectedItem(null)}
                >
                    <div
                        className="relative w-full max-w-2xl overflow-hidden rounded-lg bg-charcoal-900 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
                            onClick={() => setSelectedItem(null)}
                        >
                            <X className="h-6 w-6" />
                        </button>
                        <div className="relative aspect-video w-full bg-charcoal-800">
                            {selectedItem.image ? (
                                <Image
                                    src={selectedItem.image}
                                    alt={selectedItem.name}
                                    fill
                                    className="object-cover"
                                />
                            ) : (
                                <div className="flex h-full w-full items-center justify-center text-cream-200/30">
                                    <span className="text-lg font-bold uppercase">
                                        No Image Available
                                    </span>
                                </div>
                            )}
                        </div>
                        <div className="p-6">
                            <div className="mb-2 flex items-baseline justify-between">
                                <h3 className="font-display text-2xl font-bold text-white">
                                    {selectedItem.name}
                                </h3>
                                {selectedItem.price && (
                                    <span className="font-sans text-xl font-bold text-brick-500">
                                        {selectedItem.price}
                                    </span>
                                )}
                            </div>
                            {selectedItem.description && (
                                <p className="text-lg text-cream-200/80">
                                    {selectedItem.description}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
