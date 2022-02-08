import React, { useEffect } from 'react'; 
import './main.css';
import Navbar from './navbar';
import Main from './main';
import Footer from './footer';
import {useLocation} from 'react-router-dom';


  
const App = (props) => {




  useEffect( () => {
    try {

      console.log('[CSGO] Initial render')
      
      // remove the fallback
      document.querySelector( '.loading' ).remove();
      document.querySelector( '.loading-style' ).remove();
    } catch (e) {
      console.log(e);
    }
  }, [])

  return ( <>
    <Navbar />
    <Main>
      
    </Main>
    <Footer />
  </>
  ); 
};
  
export default App; 
