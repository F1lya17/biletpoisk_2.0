import React, { ReactNode } from "react";
import classes from './UI.module.css'

type countButtonProps = {
    children: ReactNode,
    className: string,
    onClick: any
}

const CountButton: React.FC<countButtonProps> = function ({ children, ...props }) {
    return (
        <button {...props}>
            {children}
        </button>
    );
}

export default CountButton;