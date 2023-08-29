import React from 'react';
import { Review } from '@/store/services/moveApi';
import FilmPage from '@/components/FilmPage';


async function getMovie(id: string) {
    const response = await fetch(`http://localhost:3001/api/movie?movieId=${id}`);
    return await response.json();
}

async function getReviews(id: string) {
    const response = await fetch(`http://localhost:3001/api/reviews?movieId=${id}`);
    return await response.json();
}

type FilmContainerProps = {
    id: string
}

const FilmContainer: React.FC<FilmContainerProps> = async ({ id }) => {
    const film = await getMovie(id);
    const reviews: Review[] = await getReviews(id);

    return <FilmPage film={film} reviews={reviews} />
}

export default FilmContainer;