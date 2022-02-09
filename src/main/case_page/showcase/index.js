import React from "react";
import './showcase.scss';
import Weapon from "Components/weapon";

const Showcase = ({weapons}) => {

    const size = '100px';

    const sortFn = (a, b) => {
        return a.index - b.index
    }

    return (
        <div className="showcase-cont">
            <div className="showcase-main">
                {weapons.sort(sortFn).map( (el, index) =>
                <Weapon key={index} size={'100px'} data={el} />
                )}
                {[...Array(10)].sort(sortFn).map( (_, index) => 
                    <div key={index} style={{width: size}}></div>
                )}
            </div>
        </div>
    )
}

export default Showcase;