import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import Container from "@/components/Container";
import PostCard from "@/components/Postcard";

export const dynamic = "force-static"; // nSSG

export default function BlogPage() {
    const posts = getAllPosts();
    return (



        <div className="prose">

            <h1>Blog</h1>
            <p>Artikel zu Training, Ernährung & Biomechanik.</p>

            <div className="grid gap-4 py-20 sm:grid-cols-2">
                {posts.map((p) => (
                    <PostCard key={p.slug} p={p} />
                ))}
            </div>


        </div>

    );
}
