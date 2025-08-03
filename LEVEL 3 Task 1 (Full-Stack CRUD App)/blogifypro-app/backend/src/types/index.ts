export interface Blog {
    id: string;
    title: string;
    content: string;
    authorId: string;
    createdAt: Date;
    updatedAt: Date;
    views: number;
    likes: number;
}

export interface Comment {
    id: string;
    blogId: string;
    userId: string;
    content: string;
    createdAt: Date;
}

export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    createdAt: Date;
}

export interface Analytics {
    blogId: string;
    views: number;
    likes: number;
    createdAt: Date;
}

export interface SEO {
    title: string;
    description: string;
    slug: string;
}