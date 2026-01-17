import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { Project, ProjectMetadata, BlogPost, BlogMetadata } from "@/types";

const projectsDirectory = path.join(process.cwd(), "content/projects");
const blogDirectory = path.join(process.cwd(), "content/blog");

/**
 * Get all project MDX files
 */
export async function getAllProjects(): Promise<Project[]> {
    if (!fs.existsSync(projectsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(projectsDirectory);
    const projects = fileNames
        .filter((fileName) => fileName.endsWith(".mdx"))
        .map((fileName) => {
            const slug = fileName.replace(/\.mdx$/, "");
            const fullPath = path.join(projectsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data, content } = matter(fileContents);

            return {
                slug,
                content,
                ...(data as ProjectMetadata),
            };
        });

    // Sort by date (newest first)
    return projects.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

/**
 * Get a single project by slug
 */
export async function getProjectBySlug(slug: string): Promise<Project | null> {
    try {
        const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        return {
            slug,
            content,
            ...(data as ProjectMetadata),
        };
    } catch (error) {
        return null;
    }
}

/**
 * Get all blog posts (sorted by date)
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
    if (!fs.existsSync(blogDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(blogDirectory);
    const posts = fileNames
        .filter((fileName) => fileName.endsWith(".mdx"))
        .map((fileName) => {
            const slug = fileName.replace(/\.mdx$/, "");
            const fullPath = path.join(blogDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data, content } = matter(fileContents);

            // Calculate reading time
            const stats = readingTime(content);

            return {
                slug,
                content,
                readingTime: stats.text,
                ...(data as BlogMetadata),
            };
        })
        .filter((post) => post.published); // Only return published posts

    // Sort by date (newest first)
    return posts.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

/**
 * Get a single blog post by slug
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
    try {
        const fullPath = path.join(blogDirectory, `${slug}.mdx`);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        // Calculate reading time
        const stats = readingTime(content);

        return {
            slug,
            content,
            readingTime: stats.text,
            ...(data as BlogMetadata),
        };
    } catch (error) {
        return null;
    }
}

/**
 * Get all unique tags from projects
 */
export async function getAllProjectTags(): Promise<string[]> {
    const projects = await getAllProjects();
    const tags = new Set<string>();

    projects.forEach((project) => {
        project.tags.forEach((tag) => tags.add(tag));
    });

    return Array.from(tags).sort();
}

/**
 * Get all unique tags from blog posts
 */
export async function getAllBlogTags(): Promise<string[]> {
    const posts = await getAllBlogPosts();
    const tags = new Set<string>();

    posts.forEach((post) => {
        post.tags.forEach((tag) => tags.add(tag));
    });

    return Array.from(tags).sort();
}
