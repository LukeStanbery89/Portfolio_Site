/**
 * Metadata for project showcase items
 */
export interface ProjectMetadata {
    title: string;
    description: string;
    date: string;
    tags: string[];
    image: string;
    demoUrl?: string;
    githubUrl?: string;
    featured?: boolean;
}

/**
 * Metadata for blog post items
 */
export interface BlogMetadata {
    title: string;
    description: string;
    date: string;
    tags: string[];
    author: string;
    readingTime?: string;
    image?: string;
    published: boolean;
}

/**
 * Combined project data with content
 */
export interface Project extends ProjectMetadata {
    slug: string;
    content: string;
}

/**
 * Combined blog post data with content
 */
export interface BlogPost extends BlogMetadata {
    slug: string;
    content: string;
}
