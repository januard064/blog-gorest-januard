export interface IUsers {
    id: number;
    name: string;
    email : string;
    gender: string;
    status: string
}

export interface IInitUsers{
    name: string | undefined;
    email : string | undefined;
    gender: string | undefined;
    status: string | undefined
}