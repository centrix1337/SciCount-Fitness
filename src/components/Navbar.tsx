"use client";


import Link from "next/link";
import Image from "next/image";
import {useState} from "react";
import Container from "@/components/Container";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky px-4 top-0 z-70 border-b bg-white/80 backdrop-blur">
<Container>
                {/* Top row */}
                <div className="flex h-16 items-center justify-between">
                    {/* Left: Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/logo.png" alt="Logo" width={50} height={50} className="rounded-full" />
                        {/* Brand-Name nur ab sm anzeigen, sonst wird's zu eng */}
                        <span className="hidden sm:inline text-sm font-semibold">SciCount Fitness</span>
                    </Link>



                    {/* Right: Links (Desktop) + Burger (Mobile) */}
                    <nav className="hidden md:flex items-center gap-6 text-sm">
                        <Link href="/">Home</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/coaching">Coaching</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Kontakt</Link>
                    </nav>

                    <button
                        className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-black/5"
                        aria-label="Menü öffnen"
                        aria-expanded={open}
                        onClick={() => setOpen((v) => !v)}
                    >
                        {/* simple burger icon */}
                        <svg viewBox="0 0 24 24" className="h-6 w-6">
                            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </button>
                </div>

                {/* Mobile panel */}
                {open && (
                    <div className="md:hidden border-t py-3">
                        {/* Fester Titel auf Mobile hier anzeigen */}

                        <div className="flex flex-col gap-2 text-base">
                            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
                            <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
                            <Link href="/coaching" onClick={() => setOpen(false)}>Coaching</Link>
                            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
                            <Link href="/contact" onClick={() => setOpen(false)}>Kontakt</Link>
                        </div>
                    </div>
                )}
</Container>
        </header>
    );
}
