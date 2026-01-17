import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { getAllProjects } from "@/lib/mdx";

export const metadata: Metadata = {
    title: "Projects",
    description: "Explore my portfolio of web development projects and applications",
};

export default async function ProjectsPage() {
    const projects = await getAllProjects();

    return (
        <div className="container py-12 md:py-24">
            <div className="mb-12">
                <h1 className="mb-4 text-4xl font-bold tracking-tight">Projects</h1>
                <p className="text-lg text-muted-foreground">
                    A collection of projects I've built and contributed to.
                </p>
            </div>

            {projects.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-muted-foreground">No projects yet. Check back soon!</p>
                </div>
            ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <Card key={project.slug} className="flex flex-col">
                            <CardHeader>
                                <div className="flex items-start justify-between gap-2">
                                    <CardTitle>
                                        <Link
                                            href={`/projects/${project.slug}`}
                                            className="hover:text-primary transition-colors"
                                        >
                                            {project.title}
                                        </Link>
                                    </CardTitle>
                                    {project.featured && (
                                        <Badge variant="default" className="shrink-0">
                                            Featured
                                        </Badge>
                                    )}
                                </div>
                                <CardDescription>{project.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-4 flex-1">
                                <div className="flex flex-wrap gap-2 flex-1">
                                    {project.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                                <div className="flex items-center gap-2">
                                    {project.demoUrl && (
                                        <Button asChild variant="outline" size="sm">
                                            <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="mr-2 h-4 w-4" />
                                                Demo
                                            </Link>
                                        </Button>
                                    )}
                                    {project.githubUrl && (
                                        <Button asChild variant="outline" size="sm">
                                            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                <Github className="mr-2 h-4 w-4" />
                                                Code
                                            </Link>
                                        </Button>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}
