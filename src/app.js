import React, { useEffect } from 'react'; 
import './main.css';
import Navbar from './navbar';
import Main from './main';
import Footer from './footer';

  
const App = (props) => {

  useEffect( () => {
    console.log('[CSGO] Initial render')

    // remove the fallback
    document.querySelector( '.loading' ).remove();
    document.querySelector( '.loading-style' ).remove();
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
