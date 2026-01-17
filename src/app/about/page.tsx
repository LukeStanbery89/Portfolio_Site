import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "About",
    description: "Learn more about Luke Stanbery - Software Engineer and Web Developer",
};

const skills = {
    "Languages": ["TypeScript", "JavaScript", "Python", "SQL"],
    "Frontend": ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
    "Backend": ["Node.js", "Express", "PostgreSQL", "REST APIs"],
    "Tools": ["Git", "Docker", "VS Code", "Vercel"],
};

const experience = [
    {
        title: "Senior Software Engineer",
        company: "Tech Company",
        period: "2022 - Present",
        description: "Leading development of web applications using Next.js and TypeScript. Architecting scalable solutions and mentoring junior developers.",
    },
    {
        title: "Software Engineer",
        company: "Startup Inc",
        period: "2020 - 2022",
        description: "Built and maintained full-stack applications. Implemented new features and improved application performance.",
    },
    {
        title: "Junior Developer",
        company: "Digital Agency",
        period: "2018 - 2020",
        description: "Developed responsive websites and web applications for various clients. Worked with modern JavaScript frameworks.",
    },
];

export default function AboutPage() {
    return (
        <div className="container py-12 md:py-24">
            {/* Introduction */}
            <section className="mb-16">
                <h1 className="mb-4 text-4xl font-bold tracking-tight">About Me</h1>
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                    <p className="text-lg text-muted-foreground">
                        I'm a passionate software engineer with expertise in building modern web applications.
                        I specialize in React, Next.js, and TypeScript, creating fast, accessible, and
                        user-friendly experiences.
                    </p>
                    <p className="text-lg text-muted-foreground">
                        With several years of experience in the industry, I've worked on projects ranging from
                        small business websites to large-scale enterprise applications. I'm committed to writing
                        clean, maintainable code and staying up-to-date with the latest web technologies.
                    </p>
                </div>
            </section>

            {/* Skills */}
            <section className="mb-16">
                <h2 className="mb-6 text-3xl font-bold">Skills</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    {Object.entries(skills).map(([category, items]) => (
                        <Card key={category}>
                            <CardHeader>
                                <CardTitle>{category}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {items.map((skill) => (
                                        <Badge key={skill} variant="secondary">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Experience */}
            <section className="mb-16">
                <h2 className="mb-6 text-3xl font-bold">Experience</h2>
                <div className="space-y-6">
                    {experience.map((job, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                    <div>
                                        <CardTitle className="text-xl">{job.title}</CardTitle>
                                        <p className="text-sm text-muted-foreground">{job.company}</p>
                                    </div>
                                    <Badge variant="outline">{job.period}</Badge>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{job.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Education */}
            <section>
                <h2 className="mb-6 text-3xl font-bold">Education</h2>
                <Card>
                    <CardHeader>
                        <CardTitle>Bachelor of Science in Computer Science</CardTitle>
                        <p className="text-sm text-muted-foreground">University Name</p>
                    </CardHeader>
                    <CardContent>
                        <Badge variant="outline">2014 - 2018</Badge>
                    </CardContent>
                </Card>
            </section>
        </div>
    );
}
