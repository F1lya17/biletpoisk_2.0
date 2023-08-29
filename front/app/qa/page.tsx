"use client";

import QaItems from '@/components/QaItems';
import classes from './Qa.module.css'

const Qa = function () {
    return (
        <div className="container">
            <div className={classes.qa}>
                <div className={classes.title}>
                    Вопросы-ответы
                </div>
                <QaItems />
            </div>
        </div>
    );
}

export default Qa;