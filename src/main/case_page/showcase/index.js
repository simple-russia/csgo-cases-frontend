import React from "react";
import './showcase.scss';
import Weapon from "Components/weapon";

const Showcase = ({weapons}) => {

    const size = '100px';

    return (
        <div className="showcase-cont">
            <div className="showcase-main">
                {weapons.map( (el, index) =>
                <Weapon key={index} size={'100px'} data={el} />
                )}
                {[...Array(10)].map( (_, index) => 
                    <div style={{width: size}}></div>
                )}
            </div>
        </div>
    )
}

export default Showcase;