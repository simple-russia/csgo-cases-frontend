import React from 'react'; 
import styles from './navbar.module.css';
import { NavLink } from 'react-router-dom';
import './navbar.css';
  
const Navbar = (props) => { 
  
  const links = [
    {
      to: "/cases",
      name: "cases",
    },
    {
      to: "/inventory",
      name: "inventory",
    },
    {
      to: "/contracts",
      name: "contracts",
    },
    {
      to: "/statistics",
      name: "statistics",
    },
    {
      to: "/about",
      name: "about",
    },
  ];
  
  return ( 
    <nav className={styles.navbar}>

      <div className='logo-cont'>
        <NavLink to="/cases">
          <img className="logo" src="logo.png" draggable="false"></img>
        </NavLink>
      </div>

      <div className="link-cont">
        <ul>
          {links.map( (link, index) => {
            return <li key={index}>
                <NavLink to={link.to} className={({ isActive }) => (isActive ? 'active' : '')} >
                  <span>{link.name.toUpperCase()}</span>
                </NavLink>
              </li>;
          })}
        </ul>
      </div>

      <div className = "right-cont">

      </div>

    </nav>
  ); 
}; 
  
export default Navbar; 
