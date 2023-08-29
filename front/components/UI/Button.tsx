import React, { ReactNode } from "react";
import classes from "./UI.module.css"

type btnProps = {
    transparent: Boolean,
    children: ReactNode,
    onClick: any
}

const Button: React.FC<btnProps> = function ({ transparent, children, ...props }) {
    return (
        <button {...props} className={transparent ? classes.myBtnWhite : classes.myBtn}>
            {children}
        </button>
    );
}

export default Button;