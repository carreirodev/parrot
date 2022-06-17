export interface User{
    id: number;
    name: string;
    email: string;
    password: string;
    apartment: string | number;
}

export interface SigIn{
    email: string,
    password: string,
}

export interface Post{
    userId: number;
    texto: string;
    createdAt: Date;
}