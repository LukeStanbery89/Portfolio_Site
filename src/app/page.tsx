import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getAllProjects, getAllBlogPosts } from "@/lib/mdx";

export default async function Home() {
    const projects = await getAllProjects();
    const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
    const recentPosts = (await getAllBlogPosts()).slice(0, 3);

    return (
        <div className="container py-12 md:py-24">
            {/* Hero Section */}
            <section className="mb-16 md:mb-24">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                        Hi, I'm <span className="text-primary">Luke Stanbery</span>
                    </h1>
                    <p className="mb-8 text-lg text-muted-foreground md:text-xl">
                        Software Engineer building modern web applications with Next.js, React, and TypeScript
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                        <Button asChild size="lg">
                            <Link href="/projects">
                                View Projects
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg">
                            <Link href="/about">About Me</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            {featuredProjects.length > 0 && (
                <section className="mb-16 md:mb-24">
                    <div className="mb-8 flex items-center justify-between">
                        <h2 className="text-3xl font-bold">Featured Projects</h2>
                        <Button asChild variant="ghost">
                            <Link href="/projects">
                                View All
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {featuredProjects.map((project) => (
                            <Card key={project.slug} className="flex flex-col">
                                <CardHeader>
                                    <CardTitle>
                                        <Link href={`/projects/${project.slug}`} className="hover:text-primary">
                                            {project.title}
                                        </Link>
                                    </CardTitle>
                                    <CardDescription>{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.slice(0, 3).map((tag) => (
                                            <Badge key={tag} variant="secondary">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
            )}

            {/* Recent Blog Posts */}
            {recentPosts.length > 0 && (
                <section>
                    <div className="mb-8 flex items-center justify-between">
                        <h2 className="text-3xl font-bold">Recent Posts</h2>
                        <Button asChild variant="ghost">
                            <Link href="/blog">
                                View All
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {recentPosts.map((post) => (
                            <Card key={post.slug} className="flex flex-col">
                                <CardHeader>
                                    <CardTitle>
                                        <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                                            {post.title}
                                        </Link>
                                    </CardTitle>
                                    <CardDescription>{post.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
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
                </section>
            )}
        </div>
    );
}
