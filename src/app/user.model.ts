export interface User {
    id: number
    name?: string
    surname?: string
    email: string
    password: string
    date?: Date
    address?: string
    favorites?: {}
    doneTravel?: number[];
}