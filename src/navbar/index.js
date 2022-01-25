import React, {useState, useRef, useEffect} from 'react'; 
import styles from './navbar.module.css';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import './balance.css';
import './buttons.css';
import NavLinks from './nav_links';



const Navbar = (props) => { 

  const navRef = useRef();
  const [nav_width, setNav_width] = useState(document.documentElement.clientWidth || document.body.clientWidth); // width of Navbar
  const [children_width, setChildren_width] = useState(0); // width of all of Navbar's children, even not rendered ones

  const resize_m  = () => {
    setNav_width(navRef.current.clientWidth);
  }

  useEffect( () => {
    resize_m();
    window.onresize = resize_m;

    let width = 0;
    for (let i of navRef.current.children) {
      width += i.clientWidth;
    }
    setChildren_width(width);
  }, [])

  useEffect( () => {
    console.log(nav_width, children_width);
  })
  
  return ( 
    <nav className={styles.navbar} ref={navRef}>

      <div className='logo-cont'>
        <NavLink to="/cases">
          <img className="logo" src="logo.png" draggable="false"></img>
        </NavLink>
      </div>


      { nav_width > children_width ? <NavLinks /> : '' }


      <div className = "right-cont">

        <div className='balance-cont'>
          <span className='balance'>1000.00</span>
          <NavLink to="/balance">
            <div className='balance-icon'></div>
          </NavLink>
        </div>

        <div className='icon-cont'>
          <div className='settings-icon'></div>
        </div>

        { nav_width <= children_width ? 
        <div className='icon-cont'> 
          <div className='navigaton-links-icon' fill="white"></div>
        </div>
        : '' }

      </div>

    </nav>
  ); 
}; 
  
export default Navbar; 