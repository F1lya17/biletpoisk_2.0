import React from "react";
import classes from "./UI.module.css"

const Input = function (props: any) {
    return (
        <input className={classes.myInp} {...props} />
    );
}

export default Input;