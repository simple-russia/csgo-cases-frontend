import React, {useState, useRef, useEffect} from 'react'; 

import NavLinks from './navlinks';
import Dropdown from './dropdown';
import Logo from 'Components/logo';

import './navbar.scss';
import RightBlock from './right_block';
import { useSelector, useDispatch } from 'react-redux';


const Navbar = (props) => { 

  const navRef = useRef();
  // const [nav_width, setNav_width] = useState(document.documentElement.clientWidth || document.body.clientWidth); // width of Navbar
  const nav_width = useSelector(state => state.navWidth);
  const dispatch = useDispatch();

  const [children_width, setChildren_width] = useState(0); // width of all of Navbar's children, even not rendered ones
  const [dropdown, setDropdown] = useState(''); // '' to render no dropdown, 'settings' to render settings dropdown, etc
  
  useSelector(state => state.language); // to trigger rerender when changing the language

  // nav_width state is always equal to navbar's/window's width 
  const resize_check  = () => {
    const width = navRef.current.clientWidth;

    dispatch({
      type: 'SET_WIDTH',
      payload: width,
    });
  }

  const childrenWidthCheck = () => {
    // calculate the width of children
    let width = 0;
    for (let i of navRef.current.children) {
      width += i.clientWidth;
    }
    setChildren_width(width);
  }

  useEffect( () => {
    // put resize_check on listener + dropdown outer click handler
    resize_check();
    childrenWidthCheck();
    window.addEventListener('resize', resize_check);
    window.addEventListener('click', closeOutClick);

  }, [])

  const closeDropdown = () => {
    setDropdown('');
  }

  const closeOutClick = (e) => { // for when user clicks outside the dropdown block
    console.log('aaa')
    for (let i of document.body.querySelectorAll(".dropdown-cont") ) { 
      if (i.contains(e.target)) { console.log(1); return ; }
    };
    for (let element of document.body.querySelectorAll(".navbar .icon-cont")) {
      if (element.contains(e.target)) { console.log(2); return ; }
    }

    closeDropdown();
  }
  

  return ( 
    <nav className="navbar" ref={navRef}>

      <Logo />

      { nav_width > children_width ? <NavLinks /> : '' }

      <RightBlock setDropdown={setDropdown} isMobile={nav_width <= children_width} />

      {dropdown ?
        <Dropdown dropdownCurrent={dropdown} closeFn={closeDropdown} />
      : '' }

    </nav>
  ); 
}; 
  
export default Navbar; 