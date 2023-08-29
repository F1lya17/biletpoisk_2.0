import { Film } from "@/store/services/moveApi";
import { useMemo } from "react";

type Genre = {
    name: string,
    id: string
}

function useGenreFilms(films: Array<Film>, genre: Genre) {
    const genreFilms = useMemo(() => {
        if (genre.id) {
            return [...films].filter(film => film.genre === genre.id);
        }
        else {
            return films;
        }
    }, [genre, films])

    return genreFilms;
}

export function useFilms(films: Array<Film>, genre: Genre, query: string) {
    //console.log(films);
    const genreFilms = useGenreFilms(films, genre);

    const searchedAndGenrePosts = useMemo(() => {
        return genreFilms.filter(film => film.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, genreFilms]);

    return searchedAndGenrePosts;
}