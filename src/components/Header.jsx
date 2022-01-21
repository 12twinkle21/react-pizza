import React from 'react';
import { Link } from 'react-router-dom';

import HeaderBtn from './HeaderBtn';
 

function Header(props) { 
   
   return (
         
      <div className='header'>
         <Link className='link' to='/'>
            <div className='header-logo'>
               <img className='header-logo-img' src='./img/pizzaLogo.png' width='38' height='38' alt='logo' />
               <div className='header-logo-text'>
                  <h1 className='header-logo-text__title'>react pizza</h1>
                  <p className='header-logo-text__text'>{props.text}</p>
               </div>
            </div>
         </Link>
         <Link className='link' to='/cart' >
            <HeaderBtn/>
               </Link>
      </div>
      
      )
   
}

export default Header;
