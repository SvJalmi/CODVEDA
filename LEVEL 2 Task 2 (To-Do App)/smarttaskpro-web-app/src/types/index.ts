export interface Task {
    id: string;
    title: string;
    description?: string;
    completed: boolean;
    dueDate?: Date;
}

export interface User {
    id: string;
    name: string;
    email: string;
    tasks: Task[];
}

export interface Device {
    id: string;
    name: string;
    type: string;
    status: 'online' | 'offline';
}