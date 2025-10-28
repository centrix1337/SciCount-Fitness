import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Container from "@/components/Container";
import {site} from "@/lib/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL(site.url),        // Basis-URL deiner Seite
    title: {
        default: "Fitness Blog & Coaching",   // Standard-Titel (Startseite)
        template: "%s | SciCount Fitness",    // Wie Untertitel kombiniert werden
    },
    description: site.description,          // Kurzbeschreibung
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
    openGraph: {
        type: "website",
        url: site.url,
        title: "SciCount Fitness",
        description: site.description,
        siteName: "SciCount Fitness",
        images: [{ url: "/og.png", width: 1200, height: 630 }], // dein Preview-Bild
        locale: "de_DE",
    },
    twitter: {
        card: "summary_large_image",
        site: site.twitter,
        creator: site.twitter,
        title: "SciCount Fitness",
        description: site.description,
        images: ["/og.png"],
    },
    alternates: {
        canonical: site.url,
    },
};


export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="de">
        <body className={inter.className}>
        <script defer data-domain="deinedomain.de" src="https://plausible.io/js/script.js"></script>
        <Navbar/>
        <main className="mx-auto max-w-5xl p-6">
            {children}</main>
        <footer className="border-t py-8 text-sm text-gray-500">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex justify-between">
                <span>© {new Date().getFullYear()} SciCount Fitness</span>
                <nav className="flex gap-4">
                    <a href="/impressum">Impressum</a>
                    <a href="/datenschutz">Datenschutz</a>
                </nav>
            </div>
        </footer>

        </body>
        </html>
    );
}
