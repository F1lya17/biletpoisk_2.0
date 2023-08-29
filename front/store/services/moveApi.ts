export interface Film {
    id: string,
    title: string,
    description: string,
    director: string,
    genre: string,
    posterUrl: string,
    rating: number,
    releaseYear: number,
    reviewIds: string[],
    count: number
};

export interface Cinema {
    id: string,
    name: string,
    movieIds: string[]
}

export interface Review {
    id: string,
    name: string,
    text: string,
    rating: number
}