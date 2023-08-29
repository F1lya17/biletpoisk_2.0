import { Film } from "@/store/services/moveApi";

export const fetchFilm = async (movieId: string): Promise<Film> => {
    const res = await fetch(`http://localhost:3001/api/movie?movieId=${movieId}`);
    return await res.json();
}