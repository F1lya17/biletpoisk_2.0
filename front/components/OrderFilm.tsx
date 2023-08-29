import { Film } from "@/store/services/moveApi";
import Link from "next/link";
import React from "react";
import TwoButtons from "./UI/TwoButtons";

const localGenre: { [key: string]: string } = { "fantasy": "Фэнтези", "horror": "Ужасы", "action": "Боевик", "comedy": "Комедия" }

type OrderProps = {
    film: Film
}

const OrderFilm: React.FC<OrderProps> = function ({ film }) {
    return (
        <Link href={`film/${film.id}`} className="film-card">
            <div className="film-card__row">
                <div className="img-container">
                    <img alt='poster' src={film.posterUrl}></img>
                </div>
                <div className="film-card__description">
                    <div className="film-card__info">
                        <h3 className="film-card__title">{film.title}</h3>
                        <p className="film-card__genre">{localGenre[film.genre]}</p>
                    </div>
                    {/* <TwoButtons /> */}
                </div>
            </div>
        </Link>
    );
}

export default OrderFilm;