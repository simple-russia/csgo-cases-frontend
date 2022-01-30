import React, { useEffect } from 'react'; 
import './main.css';
import Translate from 'Translator/tr'
import { useSelector } from 'react-redux';
  
const Main = (props) => { 

  useSelector(state => state.language); // to trigger language changing

  return ( 
    <div className="main">
      <div className="bg"></div>
        <div className="main-cont">
            <h1>{Translate('language')}</h1>
        </div>
    </div>
  ); 
}; 
  
export default Main;
