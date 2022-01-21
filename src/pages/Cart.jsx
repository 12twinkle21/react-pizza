import React from 'react';
import CartPizza from '../components/CartPizza';

import {Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { clearCart, removeCartPizza, plusCartPizza, minusCartPizza } from '../redux/actions/cart';

function Cart() {

   let dispatch = useDispatch();

   let { totalPrice, totalCount, items } = useSelector(({ cartReducer }) => cartReducer);

   let addedPizzas = Object.keys(items).map(key => {
      return items[key].items[0];
   });

   let onClearCart = () => {
      if (window.confirm('Вы действительно хотите очистить корзину?')) {
         dispatch(clearCart());
      }
   }

   let onClearCartBeforePay = () => {
         alert('Заказ оформлен!');
         dispatch(clearCart());
   }

   let onRemovePizza = (id) => {
      if (window.confirm('Вы действительно хотите удалить пиццу?')) {
         dispatch(removeCartPizza(id));
      }
   }

   let onPlusItem = (id) => {
      dispatch(plusCartPizza(id))
   }

   let onMinusItem = (id) => {
      dispatch(minusCartPizza(id))
   }


   return (
      
      < div className='content content__cart' >
         {totalCount?
         <div className='filled-cart'>
         <div className='cart-top'>
            <div className='cart-title'>
               <img className='cart-title__img' src='./img/bigCart.png' width='31' height='31' alt='cart'/>
               <h2 className='cart-title__text'>Корзина</h2>
            </div>
            <div className='cart-delete'>
               <img className='cart-delete__img' src='./img/trash.png' width='20' height='20' alt='trash' />
               <p className='cart-delete__text' onClick={onClearCart}>Очистить корзину</p>
            </div>
         </div>
         <div className='cart-pizzas-block'>
            {
               addedPizzas.map((obj, index) => (
                  <CartPizza name={obj.name} type={obj.type} size={obj.size} totalPrice={items[obj.id].totalPrice} totalCount={items[obj.id].items.length} onRemovePizza={onRemovePizza} id={obj.id} key={`${obj}_${index}`} onPlusItem={onPlusItem} onMinusItem={onMinusItem}/>
               ))
            }
            </div>
         <div className='cart-bottom'>
            <div className='cart-bottom__left'>
               <p className='cart-bottom__left-text'>Всего пицц: <span>{totalCount} шт.</span></p>
            </div>
            <div className='cart-bottom__right'>
               <p className='cart-bottom__right-text'>Сумма заказа: <span>{totalPrice} ₽</span></p>
            </div>
         </div>
         <div className='cart-btns'>
                  <div className='cart-btns__left'>
                  <Link className='link' to='/'>
               <button className='cart-btns__come-back'>
                  <p>&lt; Вернуться назад</p>
                        </button>
                  </Link>
            </div>
            <div className='cart-btns__right'>
               <button className='cart-btns__pay-now' onClick={onClearCartBeforePay}>
                  <p>Оплатить сейчас</p>
               </button>
            </div>
         </div>
            </div> :
            <div className='empty-cart'>
               <div className='empty-cart__top'>
                  <div className='empty-cart__top-title-block'>
                  <h2 className='empty-cart__top-title'>Корзина пустая</h2>
                     <img src='./img/icon.png' width='32' height='33' alt='icon' />
                     </div>
                  <p className='empty-cart__top-text'>Для того, чтобы заказать пиццу, перейдите на главную страницу.</p>
               </div>
               <div className='empty-cart__middle'>
               <img className='empty-cart__middle-img' src='./img/emptyCart.png' width='600' height='510' alt='empty cart' />
               </div>
               <div className='empty-cart__bottom'>
               <Link className='link' to='/'>
               <button className='empty-cart__bottom-btn'>
                  <p>Вернуться назад</p>
                     </button>
                     </Link>
               </div>
            </div>
         }
    </div >
      
      
   )
}

export default Cart;
