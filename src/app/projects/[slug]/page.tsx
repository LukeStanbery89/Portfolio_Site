import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { getAllProjects, getProjectBySlug } from "@/lib/mdx";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    const projects = await getAllProjects();
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = await getProjectBySlug(slug);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: project.title,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.description,
            type: "article",
        },
    };
}

export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;
    const project = await getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="container py-12 md:py-24">
            <div className="mx-auto max-w-4xl">
                {/* Back Button */}
                <Button asChild variant="ghost" className="mb-8">
                    <Link href="/projects">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Projects
                    </Link>
                </Button>

                {/* Project Header */}
                <header className="mb-8">
                    <h1 className="mb-4 text-4xl font-bold tracking-tight">{project.title}</h1>
                    <p className="mb-4 text-lg text-muted-foreground">{project.description}</p>

                    {/* Metadata */}
                    <div className="mb-6 flex flex-wrap items-center gap-4">
                        <time className="text-sm text-muted-foreground" dateTime={project.date}>
                            {new Date(project.date).toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                            })}
                        </time>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <Badge key={tag} variant="secondary">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-3">
                        {project.demoUrl && (
                            <Button asChild>
                                <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    View Demo
                                </Link>
                            </Button>
                        )}
                        {project.githubUrl && (
                            <Button asChild variant="outline">
                                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                    <Github className="mr-2 h-4 w-4" />
                                    View Source
                                </Link>
                            </Button>
                        )}
                    </div>
                </header>

                {/* MDX Content */}
                <article className="prose prose-neutral dark:prose-invert max-w-none">
                    <MDXRemote source={project.content} />
                </article>
            </div>
        </div>
    );
}
