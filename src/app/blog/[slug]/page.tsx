import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import PostFooter from "@/components/PostfFooter";

export async function generateStaticParams() {
    return getAllSlugs().map(slug => ({ slug }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
    if (!getAllSlugs().includes(params.slug)) return notFound();
    const { meta, content } = getPostBySlug(params.slug);

    return (
        <article className="prose">
            <h1>{meta.title}</h1>
            <p className="text-sm text-gray-500">{new Date(meta.date).toLocaleDateString("de-DE")}</p>

            <MDXRemote
                source={content}
                options={{
                    mdxOptions: {
                        remarkPlugins: [remarkGfm],
                        rehypePlugins: [
                            rehypeSlug,
                            [rehypeAutolinkHeadings, { behavior: "wrap" }],
                        ],
                    },
                }}
            />
            <PostFooter />
        </article>
    );
}
