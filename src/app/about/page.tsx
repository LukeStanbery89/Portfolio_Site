import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "About Me",
    description: "Learn more about Luke Stanbery - Software Engineer and Web Developer",
};

const skills = {
    "Languages": ["Java", "TypeScript", "JavaScript", "PHP", "HTML/CSS", "SQL"],
    "Frameworks & Libraries": ["Spring", "Node.js", "Express", "React", "Vue.js", "Laravel", "Webpack"],
    "Databases": ["MySQL", "MongoDB"],
    "DevOps & CI/CD": ["Docker", "Jenkins"],
    "Observability": ["Datadog", "Splunk", "SignalFX"],
    "Practices": ["Full Stack Development", "OOP/OOD", "Agile/Scrum", "Application Architecture", "Browser Extensions"],
};

const experience = [
    {
        company: "PayPal",
        period: "Apr 2021 - Present",
        roles: [
            {
                title: "Senior Software Engineer",
                period: "May 2025 - Present",
            },
            {
                title: "Software Engineer III",
                period: "Jul 2023 - May 2025",
            },
            {
                title: "Software Engineer II",
                period: "Apr 2021 - Jul 2023",
            },
        ],
        bullets: [
            "Own and maintain four Java and Node.js services powering PayPal's web and native consumer onboarding experience, collectively processing over 15 million requests per day.",
            "Led a cross-functional team to re-architect the codebase behind our busiest endpoint, which handles close to 500k daily requests, improving reliability and maintainability at scale.",
            "Cut latency on the account creation endpoint by 50% through targeted profiling and service-layer optimizations.",
            "Used scripted automation to roll out the redesigned native onboarding flow to 200+ countries, delivering two sprints ahead of the committed timeline.",
            "Reduced unit test suite execution time by 80%, directly improving developer feedback loops and CI pipeline throughput.",
            "Drive bi-weekly production releases for all team services, coordinating Docker and Jenkins CI/CD pipelines end to end.",
            "Build and maintain monitoring dashboards and alerting detectors using Datadog and Splunk, alongside PayPal's internal observability tooling.",
            "Stepped in to help manage the team through a period of management transition, running daily standups and planning sprints with as many as nine concurrent workstreams.",
            "Mentor junior and mid-level engineers on the stack, release process, and team norms.",
        ],
    },
    {
        company: "Project World Impact",
        period: "Dec 2016 - Feb 2021",
        roles: [
            {
                title: "Senior Full Stack Software Engineer",
                period: "Dec 2016 - Feb 2021",
            },
        ],
        bullets: [
            "Maintained a Laravel/Vue.js/MySQL fundraising platform with 1,000+ daily active users that processed over $1M in nonprofit donations in 2020.",
            "Architected multiple greenfield products — including a mobile auction platform, a survey builder, an event ticketing system, and a round-up donation tool — contributing to a 771% increase in subscription revenue from 2017 to 2020.",
            "Rebuilt the core donation framework to support multiple payment gateways (Stripe, Authorize.NET, Blackbaud, PayPal, Chase WePay, and others), reducing integration time for new processors significantly.",
            "Built OrphanMyth.org's registration and donation infrastructure for approximately 100 nonprofits and one million users using Laravel, Vue.js, and MySQL.",
            "Developed a passive donation browser extension for Chrome, Firefox, Safari, and Edge using JavaScript and PHP that collected donations whenever users shopped online.",
            "Conducted 12+ candidate interviews and mentored new engineering hires through onboarding.",
        ],
    },
    {
        company: "Seraph Group, Inc.",
        period: "Feb 2015 - Dec 2016",
        roles: [
            {
                title: "Full Stack Software Engineer",
                period: "Feb 2015 - Dec 2016",
            },
        ],
        bullets: [
            "Built four custom web applications from the ground up using React, Node.js, and MongoDB.",
            "Maintained legacy PHP applications and their MySQL databases.",
            "Facilitated daily standups as a certified Scrum Master.",
            "Participated in hiring and mentored incoming engineers.",
        ],
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
                        Senior Software Engineer with 10+ years of experience building and scaling
                        high-traffic web services. Currently at PayPal, where I own and operate
                        backend systems that handle over 15 million requests per day across consumer
                        onboarding for 200+ countries. Track record of measurable delivery: 50%
                        latency reduction, 80% faster test execution, and engineering processes
                        that routinely land ahead of schedule.
                    </p>
                    <p className="text-lg text-muted-foreground">
                        When I&apos;m not coding, you can find me playing hockey, reading
                        A Song of Ice and Fire, playing music, or enjoying a slice of pizza.
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
                                        <CardTitle className="text-xl">{job.company}</CardTitle>
                                        <Badge variant="outline">{job.period}</Badge>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="relative ml-3 border-l-2 border-muted pl-6">
                                    {job.roles.map((role, i) => (
                                        <div key={i} className="relative pb-4 last:pb-0">
                                            <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-muted bg-background" />
                                            <p className="font-medium">{role.title}</p>
                                            <p className="text-sm text-muted-foreground">{role.period}</p>
                                        </div>
                                    ))}
                                </div>
                                {job.bullets.length > 0 && (
                                    <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                                        {job.bullets.map((bullet, j) => (
                                            <li key={j}>{bullet}</li>
                                        ))}
                                    </ul>
                                )}
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
                        <CardTitle>Bachelor of Science, Computer and Information Systems</CardTitle>
                        <p className="text-sm text-muted-foreground">DeVry University</p>
                    </CardHeader>
                </Card>
            </section>
        </div>
    );
}
