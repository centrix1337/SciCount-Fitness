import Link from "next/link";

export default function Home() {
    return (
        <main className="min-h-screen p-8">
            <section className="max-w-5xl space-y-4">
                <h1 className="text-4xl font-bold">
                    Evidenzbasierter Fitness-Blog & Coaching (bald)
                </h1>
                <p className="text-lg">
                    Hier teile ich Training, Ernährung & Biomechanik – klar, praxisnah, ohne Bullshit.
                </p>
                <Link
                    href="/blog"
                    className="inline-block rounded-xl border px-4 py-2 hover:shadow"
                >
                    Zum Blog
                </Link>
            </section>
        </main>
    );
}
