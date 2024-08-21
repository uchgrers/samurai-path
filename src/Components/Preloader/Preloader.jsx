import React from 'react';
import spinner from "../../images/spinner.svg";
import classes from "../Preloader/Preloader.module.css";

const Preloader = () => {
    return (
        <img src={spinner}
             className={classes.spinner}
             alt="Fetching..."/>
    );
};

export default Preloader;