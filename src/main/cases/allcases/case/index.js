import React from "react";
import './case.scss';
import { NavLink } from "react-router-dom";


const Case = ({data, ...props}) => {

    const hostname = "http://192.168.43.247:80/assets/"

    return (
        <NavLink className="case" to={`${data.link_name}`}>
            <div className="case-cont">
                <img src={hostname + data.imageurl} draggable="false"></img>
                <span className="case-name">{data.name}</span>
                <span className="case-price" >{data.price}</span>
            </div>
        </NavLink>
    )
}

export default Case;
