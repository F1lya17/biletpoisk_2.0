"use client"

import React, { useEffect, useMemo } from "react";
import classes from "./UI.module.css"
import { createPortal } from "react-dom";


let modalRootElement: HTMLElement | null;
let element: HTMLElement;

type dropDownProps = {
    elem: HTMLElement | undefined,
    open: Boolean,
    onClose: () => void,
    options: Array<any>,
    setSelected: (item: any) => void,
}

const DropDown: React.FC<dropDownProps> = function (props) {
    const { elem, open, onClose, options, setSelected } = props;
    let top;
    let left;

    useEffect(() => {
        modalRootElement = document.querySelector("#modal");
        element = document.createElement("div");
    }, [])

    function changeCoord() {
        top = elem?.getBoundingClientRect().top ? elem?.getBoundingClientRect().top + 58 + window.scrollY : 0;
        left = elem?.getBoundingClientRect().left;
    }
    if (elem) {
        changeCoord()
    }

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
            <div style={{ top: top, left: left }} className={classes.dropdownContent}>
                {options.map(item =>
                    <div key={item.id} onClick={() => { setSelected(item); onClose() }} className={classes.dropdownItem}>
                        {item.name}
                    </div>
                )}
            </div>,
            element
        );
    }
    return null;
}

export default DropDown;