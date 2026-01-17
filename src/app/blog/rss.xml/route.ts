import { getAllBlogPosts } from "@/lib/mdx";

export async function GET() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://127.0.0.1:3000";
    const blogPosts = await getAllBlogPosts();

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Luke Stanbery - Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Articles and thoughts on software engineering, web development, and technology</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/blog/rss.xml" rel="self" type="application/rss+xml"/>
    ${blogPosts
        .map(
            (post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      ${post.tags.map((tag) => `<category>${escapeXml(tag)}</category>`).join("\n      ")}
    </item>`
        )
        .join("")}
  </channel>
</rss>`;

    return new Response(rss, {
        headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600, s-maxage=3600",
        },
    });
}

function escapeXml(unsafe: string): string {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}
