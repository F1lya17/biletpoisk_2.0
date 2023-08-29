"use client";

import React, { ReactNode, useCallback, useContext, useState } from "react";
import arrow from "../public/arrow.svg"
import Image from "next/image";

const QaContext = React.createContext<{ activeQuestion: string | null, switchQuestion: (title: string | null) => void }>({ activeQuestion: null, switchQuestion: () => undefined });

type Props = {
    children: ReactNode,
}

const QaAccordion = ({ children }: Props) => {
    const [activeQuestion, setActiveQuestion] = useState<string | null>(null);

    const switchQuestion = useCallback((title: string | null) => {
        setActiveQuestion((activeQuest) =>
            activeQuest === title ? null : title
        )
    }, [])

    return (
        <QaContext.Provider value={{ activeQuestion, switchQuestion }}>
            {children}
        </QaContext.Provider>
    );
};

type ItemProps = {
    children: ReactNode,
    title: string
}

QaAccordion.Item = function QaItem({ children, title }: ItemProps) {
    const { activeQuestion, switchQuestion } = useContext(QaContext);
    return (
        <div onClick={() => switchQuestion(title)} className="qa-item">
            <div className="qa__row">
                <h3 className="qa__title">{title}</h3>
                <Image className={activeQuestion === title ? "rotated-img" : "normal-img"} alt="arrow" src={arrow}></Image>
            </div>
            {activeQuestion === title && <div className="qa__answer">{children}</div>}
        </div>
    );
};

type AnswerProps = {
    title: String
}

QaAccordion.Answer = function QaAnswer({ title }: AnswerProps) {
    return <>{title}</>;
};

export default function QaItems() {
    return (
        <QaAccordion>
            <QaAccordion.Item title={"Что такое Билетопоиск?"}>
                <QaAccordion.Answer title={"Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов."} />
            </QaAccordion.Item>
            <QaAccordion.Item title={"Какой компании принадлежит Билетопоиск?"}>
                <QaAccordion.Answer title={"Ответ"} />
            </QaAccordion.Item>
            <QaAccordion.Item title={"Как купить билет на Билетопоиск?"}>
                <QaAccordion.Answer title={"Ответ"} />
            </QaAccordion.Item>
            <QaAccordion.Item title={"Как оставить отзыв на Билетопоиск?"}>
                <QaAccordion.Answer title={"Ответ"} />
            </QaAccordion.Item>
        </QaAccordion>
    );
};
