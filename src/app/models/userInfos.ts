export interface User {
    id: number
    name: string
    email: string
    password: string
    tasks?: Tasks[]
}
interface Tasks {
    importante?: string[]
    trabalho?: string[]
    estudos?: string[]
    lazer?: string[]
    compras?: string[]
}