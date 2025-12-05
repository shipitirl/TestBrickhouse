"use client";

import { menuData, disclaimers } from "@/data/menu";
import { useEffect } from "react";

export default function PrintMenuPage() {
    useEffect(() => {
        // Optional: automatically trigger print dialog
        // window.print();
    }, []);

    return (
        <div className="min-h-screen bg-white p-8 text-black">
            <div className="mx-auto max-w-4xl">
                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className="mb-2 font-display text-4xl font-bold uppercase tracking-tight text-black">
                        Brickhouse Burgers & Brews
                    </h1>
                    <p className="text-sm text-gray-600">
                        500 Main Ave, De Pere, WI 54115 | (920) 338-2337
                    </p>
                </div>

                {/* Menu Content */}
                <div className="columns-1 gap-8 md:columns-2">
                    {menuData.map((category) => (
                        <div key={category.title} className="mb-8 break-inside-avoid">
                            <h2 className="mb-3 border-b-2 border-black pb-1 font-display text-2xl font-bold uppercase">
                                {category.title}
                            </h2>
                            {category.note && (
                                <p className="mb-4 text-xs italic text-gray-600">
                                    {category.note}
                                </p>
                            )}

                            <div className="space-y-4">
                                {category.items.map((item) => (
                                    <div key={item.name}>
                                        <div className="flex items-baseline justify-between">
                                            <h3 className="font-bold">{item.name}</h3>
                                            {item.price && (
                                                <span className="ml-2 text-sm font-bold">
                                                    {item.price}
                                                </span>
                                            )}
                                        </div>
                                        {item.description && (
                                            <p className="text-sm text-gray-700">
                                                {item.description}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* BYOB Options */}
                            {category.isByob && category.byobOptions && (
                                <div className="mt-4 space-y-4">
                                    {category.byobOptions.map((option) => (
                                        <div key={option.category}>
                                            <h4 className="font-bold underline">{option.category}</h4>
                                            <p className="text-sm text-gray-700">
                                                {option.items.join(", ")}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Footer / Disclaimers */}
                <div className="mt-8 border-t-2 border-black pt-4 text-center text-xs text-gray-600">
                    {disclaimers.map((disclaimer, index) => (
                        <p key={index}>{disclaimer}</p>
                    ))}
                </div>
            </div>

            <style jsx global>{`
        @media print {
          @page {
            margin: 0.5in;
          }
          body {
            background: white;
            color: black;
          }
        }
      `}</style>
        </div>
    );
}
