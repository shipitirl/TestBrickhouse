import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: {
        template: "%s | Brickhouse Burgers and Brews",
        default: "Brickhouse Burgers and Brews | De Pere, WI",
    },
    description:
        "De Pere's favorite spot for craft burgers, Wisconsin cheese curds, and local brews. Featuring a banquet room for private events.",
    metadataBase: new URL("https://brickhouseburgersandbrews.com"),
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="bg-charcoal-900 font-sans text-cream-100 antialiased selection:bg-brick-500 selection:text-white">
                {children}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Restaurant",
                            name: "Brickhouse Burgers and Brews",
                            image: "https://brickhouseburgersandbrews.com/opengraph-image.png",
                            address: {
                                "@type": "PostalAddress",
                                streetAddress: "500 Main Ave",
                                addressLocality: "De Pere",
                                addressRegion: "WI",
                                postalCode: "54115",
                                addressCountry: "US",
                            },
                            geo: {
                                "@type": "GeoCoordinates",
                                latitude: 44.449,
                                longitude: -88.06,
                            },
                            url: "https://brickhouseburgersandbrews.com",
                            telephone: "+19203382337",
                            servesCuisine: "American",
                            priceRange: "$$",
                            openingHoursSpecification: [
                                {
                                    "@type": "OpeningHoursSpecification",
                                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
                                    opens: "11:00",
                                    closes: "22:00",
                                },
                                {
                                    "@type": "OpeningHoursSpecification",
                                    dayOfWeek: ["Friday", "Saturday"],
                                    opens: "11:00",
                                    closes: "23:00",
                                },
                                {
                                    "@type": "OpeningHoursSpecification",
                                    dayOfWeek: "Sunday",
                                    opens: "11:00",
                                    closes: "21:00",
                                },
                            ],
                        }),
                    }}
                />
            </body>
        </html>
    );
}
