export interface Card{
    id?: string
    description?: string
    images: []
    about?: string
}

export  interface Data{
    cards:  Card[]
}
    