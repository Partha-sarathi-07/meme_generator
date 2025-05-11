export interface Meme {
    topText: string
    bottomText: string
    imageUrl: string
}

export interface MemeApiResponse {
    id: string
    name: string
    url: string
    width: number
    height: number
    box_count: number
}