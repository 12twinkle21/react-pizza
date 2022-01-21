import React from 'react';
import { useSelector } from 'react-redux';

function HeaderBtn() { 
   
   let { totalPrice, totalCount } = useSelector(({ cartReducer }) => cartReducer);

   return (
         
         <button className='header-btn'>
            <span className='header-btn-item-1'>{totalPrice} Р</span>
            <span className='header-btn-item-2'>
               <img className='header-btn-item-2__img' src='./img/cart.png' width='18' height='18' alt='cart' />
               <p className='header-btn-item-2__text'>{totalCount}</p>
            </span>
      </button>
      
      )
   
}

export default HeaderBtn;