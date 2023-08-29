import React, { FC } from "react"
import HomePage from "@/components/HomePage";


async function getMovies() {
    const response = await fetch("http://localhost:3001/api/movies");
    return await response.json();
}

async function getCinemas() {
    const response = await fetch("http://localhost:3001/api/cinemas");
    return await response.json();
}

const FilmsContainer = async () => {
    const allFilms = await getMovies();
    const cinemas = await getCinemas();
    return <HomePage allMovies={allFilms} cinemas={cinemas} />
}

export default FilmsContainer;