"use client"

import React, { useEffect, useState } from "react";
import classes from '../app/filmCard/[id]/Film.module.css'
import TwoButtons from "./UI/TwoButtons";
import ReviewCard from "./ReviewCard";
import { Film, Review } from "@/store/services/moveApi";

const localGenre: { [key: string]: string } = { "fantasy": "Фэнтези", "horror": "Ужасы", "action": "Боевик", "comedy": "Комедия" }

interface FilmPageProps {
    film: Film,
    reviews: Review[]
}

const FilmPage: React.FC<FilmPageProps> = function ({ film, reviews }) {
    return (
        <div className="container">
            <div className={classes.film}>
                <div className={classes.filmCard}>
                    <div className={classes.imgContainer}>
                        <img className={classes.img} src={film?.posterUrl} alt="poster" />
                    </div>
                    <div className={classes.filmText}>
                        <div className={classes.filmUpperInfo}>
                            <div className={classes.filmInfo}>
                                <h1 className={classes.title}>{film?.title}</h1>
                                <h3 className={classes.itemInfo}><span>Жанр: </span> {localGenre[film.genre]}</h3>
                                <h3 className={classes.itemInfo}><span>Год выпуска: </span> {film.releaseYear}</h3>
                                <h3 className={classes.itemInfo}><span>Рейтинг: </span> {film?.rating}</h3>
                                <h3 className={classes.itemInfo}><span>Режиссер: </span> {film?.director}</h3>
                            </div>
                            <TwoButtons setOpen={() => { }} film={film} />
                        </div>
                        <div className={classes.filmLowerInfo}>
                            <h2 className={classes.header}>Описание</h2>
                            <div className={classes.description}>
                                {film.description}
                            </div>
                        </div>
                    </div>
                </div>
                {reviews.map(rev =>
                    <ReviewCard key={rev.id} review={rev} />
                )}
            </div>
        </div>
    );
}

export default FilmPage;