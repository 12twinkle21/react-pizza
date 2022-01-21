import React from 'react';

function CartPizza(props) {

   let handleRemoveClick = () => {
      props.onRemovePizza(props.id);
   }

   let addPizza = () => {
      props.onPlusItem(props.id);
   }

   let deletePizza = () => {
      props.onMinusItem(props.id);
   }

   return (

      <div className='cart-pizza'>
         <div className='cart-pizza__info-block'>
            <div className='cart-pizza__img-block'>
               <img className='cart-pizza__img' src='./img/cartPizza.png' width='80' height='80' alt='pizza' />
            </div>
            <div className='cart-pizza__info'>
               <p className='cart-pizza__name'>{props.name}</p>
               <p className='cart-pizza__settings'>{props.type} тесто, {props.size} см.</p>
               </div>
         </div>
         <div className='cart-pizza__amount'>
            <button className='cart-pizza__minus-btn' onClick={deletePizza}>
               <span>&minus;</span>
            </button>
            <span className='cart-pizza__count'>{props.totalCount}</span>
            <button className='cart-pizza__plus-btn' onClick={addPizza}>
               <span>&#43;</span>
            </button>
         </div>
         <div className='cart-pizza__price'>
            <span>{props.totalPrice}</span>
         </div>
         <div className='cart-pizza__delete'>
            <button className='cart-pizza__delete-btn' onClick={handleRemoveClick}>
               <span>&times;</span>
            </button>
         </div>
      </div>

   )
}

export default CartPizza;
