import React, { useEffect } from 'react'; 
import './main.css';
import Navbar from './navbar';
import Main from './main';
import Footer from './footer';
import { useSelector } from 'react-redux';
  
const App = (props) => {

  useEffect( () => {
    console.log('[CSGO] Initial render')
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
