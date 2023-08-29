import React, { useContext } from "react";
import classes from "./UI.module.css"
import CountButton from './CountButton'
import minus from "../../public/dash.svg"
import plus from "../../public/plus.svg"
import { BasketContext } from "../../provider";
import { observer } from "mobx-react-lite";
import { Film } from "@/store/services/moveApi";
import Image from "next/image";

type twoButtonsProps = {
    setOpen: any,
    film: Film
}

const TwoButtons: React.FC<twoButtonsProps> = observer(({ setOpen, film }) => {
    const { basket } = useContext(BasketContext);

    const changeCount = (value: number) => {
        if (value === -1) {
            if (basket.getFilmCount(film.id) === 1) {
                setOpen(true);
            }
            else if (basket.getFilmCount(film.id) !== 0) {
                basket.decreaseCount(film.id)
            }
        }
        else {
            if (basket.getFilmCount(film.id) !== 30) {
                basket.addFilm(film);
            }
        }
    }
    return (
        <div className={classes.TwoButtons}>
            <CountButton className={basket.getFilmCount(film.id) === 0 ? classes.disabled : classes.countBtn} onClick={() => changeCount(-1)}><Image className={classes.btnImg} alt='minus' src={minus} /></CountButton>
            <div className={classes.count}>{basket.getFilmCount(film.id)}</div>
            <CountButton className={basket.getFilmCount(film.id) === 30 ? classes.disabled : classes.countBtn} onClick={() => changeCount(1)}><Image className={classes.btnImg} alt='plus' src={plus} /></CountButton>
        </div>
    );
})

export default TwoButtons;