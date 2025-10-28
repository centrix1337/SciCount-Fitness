import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

export default function PostCard({ p }: { p: PostMeta }) {
    return (
        <article className="rounded-2xl border p-4 hover:shadow-sm transition">
            <Link href={`/blog/${p.slug}`} className="no-underline">
                <h2 className="text-xl font-semibold">{p.title}</h2>
            </Link>
            <div className="text-sm text-gray-500">
                {new Date(p.date).toLocaleDateString("de-DE")}

            </div>
            {p.excerpt ? <p className="mt-2 text-gray-700">{p.excerpt}</p> : null}
        </article>
    );
}
