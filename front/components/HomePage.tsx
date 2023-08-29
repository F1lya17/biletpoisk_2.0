"use client";

import React, { useEffect, useRef, useState } from "react";
import classes from '../app/Home.module.css'
import Input from './UI/Input'
import DropDown from './UI/DropDown'
import FilmCard from "./FilmCard";
import { useFilms } from "../hooks/useFilms";
import arrow from "../public/arrow.svg";
import Image from "next/image";
import { Cinema, Film } from "@/store/services/moveApi";

type HomePageProps = {
    allMovies: Film[],
    cinemas: Cinema[],
}


const HomePage: React.FC<HomePageProps> = function ({ allMovies, cinemas }) {
    const [movies, setMoives] = useState<Film[]>([]);
    const [selectedCinema, setSelectedCinema] = useState({ name: "", id: "null" });
    const [selectedGenre, setSelectedGenre] = useState({ name: "", id: "" });
    const [query, setQuery] = useState('');
    const [openGenre, setOpenGenre] = useState(false);
    const [openCinema, setOpenCinema] = useState(false);
    const firstDDref = useRef<any>();
    const secondDDref = useRef<any>();
    const [isLoading, setIsLoading] = useState(false);

    const filteredFilms = useFilms(movies, selectedGenre, query);

    useEffect(() => {
        async function getFilmsInCinema() {
            if (selectedCinema.id !== "null") {
                setIsLoading(true);
                const response = await fetch(`http://localhost:3001/api/movies?cinemaId=${selectedCinema.id}`);
                let a = await response.json()
                setMoives(a);
                setIsLoading(false);
            }
            else {
                setMoives(allMovies);
            }
        }
        getFilmsInCinema();
    }, [selectedCinema])

    function stopOpening() {
        setOpenGenre(false);
        setOpenCinema(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', stopOpening)
        return () => {
            window.removeEventListener('scroll', stopOpening)
        }
    }, [])

    function openDropDown() {
        if (openCinema) {
            setOpenCinema(false);
            setOpenGenre(true);
        }
        else {
            setOpenGenre(prev => !prev);
        }
    }


    return (
        <div className="container">
            <div className={classes.home}>
                <div className={classes.filter}>
                    <h3 className={classes.title}>Фильтры поиска</h3>
                    <div className={classes.filterItem}>
                        <h4 className={classes.filterName}>Название</h4>
                        <Input value={query} onChange={(e: any) => setQuery(e.target.value)} placeholder={"Введите название"} />
                    </div>
                    <div className={classes.filterItem}>
                        <h4 className={classes.filterName}>Жанр</h4>
                        <div ref={firstDDref} id="1-drop-down" onClick={() => openDropDown()} className={classes.dropdownBtn}>
                            <h3 className={openGenre ? classes.dropdownBoldPhr : classes.dropdownPhr}>{selectedGenre.name ? selectedGenre.name : "Выберите жанр"}</h3>
                            <Image className={openGenre ? "rotated-img" : "normal-img"} alt='arrow' src={arrow}></Image>
                        </div>
                        <DropDown
                            open={openGenre}
                            onClose={() => setOpenGenre(false)}
                            options={[{ name: "Не выбран", id: "" }, { name: "Боевик", id: "action" }, { name: "Комедия", id: "comedy" }, { name: "Фэнтези", id: "fantasy" }, { name: "Ужасы", id: "horror" }]}
                            setSelected={setSelectedGenre}
                            elem={firstDDref.current}
                        />
                    </div>
                    <div className={classes.filterItem}>
                        <h4 className={classes.filterName}>Кинотеатр</h4>
                        <div ref={secondDDref} id="2-drop-down" onClick={() => setOpenCinema(prev => !prev)} className={classes.dropdownBtn}>
                            <h3 className={openCinema ? classes.dropdownBoldPhr : classes.dropdownPhr}>{selectedCinema.name ? selectedCinema.name : "Выберите кинотеатр"}</h3>
                            <Image className={openCinema ? "rotated-img" : "normal-img"} alt='arrow' src={arrow}></Image>
                        </div>
                        <DropDown
                            open={openCinema}
                            onClose={() => setOpenCinema(false)}
                            options={[{ name: "Не выбран", id: "null" }, ...cinemas]}
                            setSelected={setSelectedCinema}
                            elem={secondDDref.current}
                        />
                    </div>
                </div>
                {!isLoading && <div className={classes.films}>
                    {filteredFilms.map(film =>
                        <FilmCard setIsLoading={setIsLoading} isOrder={false} key={film.id} film={film} />
                    )}
                </div>}
                {isLoading && <h1>Идёт загрузка...</h1>}
            </div>
        </div>
    );
}

export default HomePage;