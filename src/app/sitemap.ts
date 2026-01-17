import { MetadataRoute } from "next";
import { getAllProjects, getAllBlogPosts } from "@/lib/mdx";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://127.0.0.1:3000";

    // Static routes
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.9,
        },
    ];

    // Dynamic project routes
    const projects = await getAllProjects();
    const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: new Date(project.date),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    // Dynamic blog post routes
    const blogPosts = await getAllBlogPosts();
    const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}
