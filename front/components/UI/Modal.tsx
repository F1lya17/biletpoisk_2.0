"use client";

import React, { MouseEventHandler, ReactNode, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import classes from "./UI.module.css";



type modalProps = {
    open: Boolean,
    onClose: MouseEventHandler<HTMLDivElement>,
    children: ReactNode
}

let modalRootElement: HTMLElement | null;

const Modal: React.FC<modalProps> = function (props) {
    const { open, onClose } = props;

    useEffect(() => {
        modalRootElement = document.querySelector("#modal");
    }, [])

    const element = useMemo(() => {
        const element = document.createElement("div");
        return element;
    }, []);

    useEffect(() => {
        if (open) {
            modalRootElement?.appendChild(element);
            return () => {
                modalRootElement?.removeChild(element);
            }
        }
    })
    if (open) {
        return createPortal(
            <div className={classes.modal_background} onClick={onClose}>
                <div className={classes.modal_card}>{props.children}</div>
            </div>,
            element
        );
    }
    return null;
}

export default Modal;