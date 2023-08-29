import { makeAutoObservable } from "mobx";
import { Film } from "./services/moveApi";

export default class BasketStore {
    _films: Array<Film> = [];
    _totalCount: number = 0;
    constructor() {
        makeAutoObservable(this);
    }

    changeTotalCount(value: number) {
        this._totalCount += value;
    }

    setFilms(films: Array<Film>) {
        for (let film of films) {
            this._films.push({ ...film, count: 1 });
        }
    }

    addFilm(film: Film) {
        let isBeen = false;
        this.changeTotalCount(1);
        for (let i of this._films) {
            if (i.id === film.id) {
                i.count += 1;
                isBeen = true;
            }
        }
        if (!isBeen) {
            this._films.push({ ...film, count: 1 });
        }
    }

    deleteFilm(id: string) {
        this._films = this._films.filter(film => {
            if (film.id !== id) {
                return true;
            }
            else {
                this.changeTotalCount(-film.count);
                return false;
            }
        });
    }

    decreaseCount(id: string) {
        for (let i of this._films) {
            if (i.id === id) {
                i.count -= 1;
                this.changeTotalCount(-1);
                if (i.count === 0) {
                    this.deleteFilm(i.id);
                }
            }
        }
    }

    getFilmCount(id: string) {
        for (let film of this._films) {
            if (film.id === id) {
                return film.count
            }
        }
        return 0
    }

    get films() {
        return this._films;
    }

    get totalCount() {
        return this._totalCount;
    }
}