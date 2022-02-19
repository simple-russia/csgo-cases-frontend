import React, { useState } from "react";
import './css/showcase.scss';
import Weapon from "Components/weapon";

const Showcase = ({weapons}) => {

    const [showStats, setShowStats] = useState(false);

    const size = 100;
    const total_rarity = weapons.reduce( (sum, weapon) => sum + weapon.rarity, 0 )

    const math_expectancy = weapons.reduce( (sum, weapon) => sum + weapon.price * (weapon.rarity / total_rarity), 0);

    let winExpect = 0; // the math expectancy of the gotten weapon's price

    const sortFn = (a, b) => {
        return a.index - b.index
    }

    return (
        <div className="showcase-cont">
            <div className="showcase-main" onClick={() => setShowStats(pr => !pr)} style={{"--math-exp": showStats ? `"Math expectancy is ${math_expectancy.toFixed(2)}$"` : ''}} >
                {weapons.sort(sortFn).map( (el, index) =>
                    <Weapon
                      key={index}
                      size={size}
                      data={el}
                      style={showStats && {
                          '--chance': `"${ (el.rarity * 100 / total_rarity).toFixed(2) }%"`,
                          '--price': `"~${el.price}$"`,
                        }
                      }
                    />
                )}
                {[...Array(10)].sort(sortFn).map( (_, index) => 
                    <div key={index} style={{width: size}}></div>
                )}
            </div>
        </div>
    )
}

export default Showcase;