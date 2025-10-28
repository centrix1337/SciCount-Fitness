import { getAllPosts } from "@/lib/posts";
const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default async function sitemap() {
    const pages = ["", "/blog", "/coaching", "/about", "/contact", "/impressum", "/datenschutz"]
        .map((p) => ({ url: `${base}${p}`, lastModified: new Date() }));

    const posts = getAllPosts().map((p) => ({
        url: `${base}/blog/${p.slug}`,
        lastModified: new Date(p.date),
    }));

    return [...pages, ...posts];
}
