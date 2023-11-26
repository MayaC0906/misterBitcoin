export interface Move {
    toId: string,
    to: string,
    at: number,
    amount: number
}
export interface User {
    _id: string,
    name: string,
    coins: number,
    moves: Move[]
}