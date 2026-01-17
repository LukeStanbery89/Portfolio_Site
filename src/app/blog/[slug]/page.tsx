import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/mdx";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    const posts = await getAllBlogPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = await getBlogPostBySlug(slug);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: post.title,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
            publishedTime: post.date,
            authors: [post.author],
        },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = await getBlogPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="container py-12 md:py-24">
            <div className="mx-auto max-w-4xl">
                {/* Back Button */}
                <Button asChild variant="ghost" className="mb-8">
                    <Link href="/blog">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Blog
                    </Link>
                </Button>

                {/* Post Header */}
                <header className="mb-8">
                    <h1 className="mb-4 text-4xl font-bold tracking-tight">{post.title}</h1>
                    <p className="mb-4 text-lg text-muted-foreground">{post.description}</p>

                    {/* Metadata */}
                    <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <span>By {post.author}</span>
                        </div>
                        <span>•</span>
                        <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                            })}
                        </time>
                        {post.readingTime && (
                            <>
                                <span>•</span>
                                <span>{post.readingTime}</span>
                            </>
                        )}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </header>

                {/* MDX Content */}
                <article className="prose prose-neutral dark:prose-invert max-w-none">
                    <MDXRemote source={post.content} />
                </article>
            </div>
        </div>
    );
}
