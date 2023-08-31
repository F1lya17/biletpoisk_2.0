"use client";

import Link from "next/link";
import basketImg from "../public/basket.svg"
import { useContext } from "react";
import { BasketContext } from "../provider";
import CountButton from "./UI/CountButton";
import Image from "next/image";
import { observer } from "mobx-react-lite";

const Header = observer(function () {
    const { basket } = useContext(BasketContext);

    return (
        <div className="header">
            <div className="container">
                <div className="header__row">
                    <Link href="/" className="header__logo">Билетпоиск</Link>
                    {basket.totalCount > 0 && <CountButton className="films-count">{basket.totalCount}</CountButton>}
                    <Link href="/order"><Image className="header__basket" alt="basket" src={basketImg}></Image></Link>
                </div>
            </div>
        </div>
    );
})

export default Header;