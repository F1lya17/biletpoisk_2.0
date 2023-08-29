"use client";

import React, { useContext, useState } from "react";
import TwoButtons from "../components/UI/TwoButtons"
import cross from "../public/cross.svg"
import classes from "../app/order/Order.module.css"
import Button from "../components/UI/Button"
import Modal from "../components/UI/Modal";
import { BasketContext } from "../provider";
import { Film } from "@/store/services/moveApi";
import Link from "next/link";
import Image from "next/image";

const localGenre: { [key: string]: string } = { "fantasy": "Фэнтези", "horror": "Ужасы", "action": "Боевик", "comedy": "Комедия" }

type filmCardProps = {
    film: Film,
    isOrder: Boolean,
    setIsLoading: any
}

const FilmCard: React.FC<filmCardProps> = function ({ film, isOrder, setIsLoading }) {
    const [open, setOpen] = useState(false);
    const { basket } = useContext(BasketContext);

    return (
        <div className="film-card">
            <div className="film-card__row">
                <div className="img-container">
                    <img alt='poster' src={film.posterUrl}></img>
                </div>
                <div className="film-card__description">
                    <div className="film-card__info">
                        <Link onClick={() => setIsLoading(true)} href={`http://localhost:3000/filmCard/${film.id}`} className="film-card__title">{film.title}</Link>
                        <p className="film-card__genre">{localGenre[film.genre]}</p>
                    </div>
                    <TwoButtons setOpen={setOpen} film={film} />
                    {isOrder && <Image onClick={() => setOpen(true)} className="film-card__img" src={cross} alt="cross"></Image>}
                </div>
            </div>
            <Modal open={open} onClose={() => setOpen(false)}>
                <div className={classes.firstLine}>
                    <h2 className={classes.title}>Удаление билета</h2>
                    <Image className={classes.modalImg} src={cross} alt="cross"></Image>
                </div>
                <p className={classes.question}>Вы уверены, что хотите удалить билет?</p>
                <div className={classes.buttons}>
                    <Button transparent={false} onClick={() => basket.deleteFilm(film.id)}>Да</Button>
                    <Button onClick={() => setOpen(false)} transparent={true}>Нет</Button>
                </div>
            </Modal>
        </div>
    );
}

export default FilmCard;