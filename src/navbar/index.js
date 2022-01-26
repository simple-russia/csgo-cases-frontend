import React, {useState, useRef, useEffect} from 'react'; 
import styles from './navbar.module.css';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import './balance.css';
import './buttons.css';
import './dropdown.css';
import NavLinks from './nav_links';
import Button from './button/button';
import Dropdown from './dropdown';



const Navbar = (props) => { 

  const navRef = useRef();
  const [nav_width, setNav_width] = useState(document.documentElement.clientWidth || document.body.clientWidth); // width of Navbar
  const [children_width, setChildren_width] = useState(0); // width of all of Navbar's children, even not rendered ones
  const [dropdown, setDropdown] = useState('');

  const resize_m  = () => {
    setNav_width(navRef.current.clientWidth);
  }

  useEffect( () => {
    resize_m();
    window.onresize = resize_m;
    document.addEventListener('click', closeOutClick);

    let width = 0;
    for (let i of navRef.current.children) {
      width += i.clientWidth;
    }
    setChildren_width(width);
  }, [])

  // useEffect( () => {
  //   console.log(children_width, nav_width, dropdown)
  // })

  const closeOutClick = (e) => { // for when user clicks outside the dropdown block
    for (let i of document.body.querySelectorAll(".dropdown-cont") ) { 
      if (i.contains(e.target)) { return ; }
    };
    for (let element of document.body.querySelectorAll(".icon-cont")) {
      if (element.contains(e.target)) { return ; }
    }

    setDropdown('')
  }
  
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


        <Button name="settings" clickFn={ ()=>{setDropdown(prev => prev === "settings"? "" : "settings" )} } />

        { nav_width <= children_width ? 
          <Button name="navigation-links" clickFn={ ()=>{setDropdown(prev => prev == 'navigation-links'? "" : 'navigation-links')} } />
        : '' }

      </div>

      <Dropdown dropdownCurrent={dropdown} isMobile={!(nav_width > children_width)} closeFn={()=>setDropdown("")} />

    </nav>
  ); 
}; 
  
export default Navbar; 