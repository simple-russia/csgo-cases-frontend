import React, { useEffect } from 'react'; 
import './main.css';
import Translate from 'Translator/tr'
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Cases from './cases';
import Inventory from './inventory';
import Statistics from './statistics';
import Contracts from './contracts';
import About from './about';
import Balance from './balance';
import NotFound from './404';

const Main = (props) => { 

  useSelector(state => state.language); // to trigger language changing

  return ( 
    <div className="main">
      <div className="bg"></div>
        <div className="main-cont">

        <Routes>
          <Route path="/cases" element={<Cases />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/contracts" element={<Contracts />} />
          <Route path="/about" element={<About />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/balance" element={<Balance />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>

        </div>
    </div>
  ); 
}; 
  
export default Main;
