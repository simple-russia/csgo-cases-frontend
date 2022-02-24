import React from "react";
import { NavLink } from "react-router-dom";
import './404.css';

const NotFound = (props) => {

    return (<>
        <h1 className="h1-404">404</h1>
        <p className="p-404">The page has been probably kidnapped by terrorists. Call counter-terrorists to return it.</p>
        <NavLink to="/cases" className="a-404 button-1" >Rush Back to the main page</NavLink>
    </>)
}

export default NotFound;