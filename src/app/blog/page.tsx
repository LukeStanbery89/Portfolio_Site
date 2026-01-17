import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getAllBlogPosts } from "@/lib/mdx";

export const metadata: Metadata = {
    title: "Blog",
    description: "Articles and thoughts on web development, software engineering, and technology",
};

export default async function BlogPage() {
    const posts = await getAllBlogPosts();

    return (
        <div className="container py-12 md:py-24">
            <div className="mb-12">
                <h1 className="mb-4 text-4xl font-bold tracking-tight">Blog</h1>
                <p className="text-lg text-muted-foreground">
                    Thoughts on web development, software engineering, and more.
                </p>
            </div>

            {posts.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-muted-foreground">No posts yet. Check back soon!</p>
                </div>
            ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <Card key={post.slug} className="flex flex-col">
                            <CardHeader>
                                <CardTitle>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="hover:text-primary transition-colors"
                                    >
                                        {post.title}
                                    </Link>
                                </CardTitle>
                                <CardDescription>{post.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-4 flex-1">
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                                <div className="flex items-center justify-between text-sm text-muted-foreground mt-auto">
                                    <time dateTime={post.date}>
                                        {new Date(post.date).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric",
                                        })}
                                    </time>
                                    {post.readingTime && <span>{post.readingTime}</span>}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}
