import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const POSTS_PATH = path.join(process.cwd(), "content", "posts");

export type PostMeta = {
    slug: string;
    title: string;
    date: string;
    excerpt?: string;
    tags?: string[];
    draft: boolean
};

export function getAllSlugs() {
    return fs.readdirSync(POSTS_PATH)
        .filter(f => f.endsWith(".mdx"))
        .map(f => f.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string) {
    const fullPath = path.join(POSTS_PATH, `${slug}.mdx`);
    const file = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(file);
    const meta: PostMeta = {
        slug,
        title: data.title ?? slug,
        date: data.date ?? new Date().toISOString(),
        excerpt: data.excerpt ?? "",
        tags: data.tags ?? [],
        draft: Boolean(data.draft),
    };
    return { meta, content };
}

export function getAllPosts(): PostMeta[] {
    return getAllSlugs()
        .map(slug => getPostBySlug(slug).meta).filter((p) => !p.draft)
        .sort((a, b) => (a.date < b.date ? 1 : -1));
}
