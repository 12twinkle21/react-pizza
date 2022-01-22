import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function Pizza(props) {

   let [availableType, setAvailableType] = React.useState(props.types[0]);
   let [availableSize, setAvailableSize] = React.useState(props.sizes[0]);

   let onSelectType = (index) => { 
      setAvailableType(index);
   }

   let onSelectSize = (index) => { 
      setAvailableSize(index);
   }
   
   let { id, name, url, price } = props;

   let onAddPizza = () => {
      let obj = {
         id,
         name,
         url,
         price,
         size: availableSize,
         type: pizzaTypes[availableType],
      };
      props.onClickAddPizza(obj)
   }

   let pizzaTypes = ['тонкое','традиционное'];
   let pizzaSizes = [26, 30, 40];

   
   return (

      <div className='pizza'>
         <div className='pizza-img-block'>
            <img className='pizza-img' src={ props.url } alt='Pizza' />
            </div>
         <h3 className='pizza-name'>{ props.name }</h3>
         <div className='pizza-menu'>
            <div className='pizza-menu__types'>
               <ul>
                  {
                  
                     pizzaTypes.map((pizzaType, index) => ( 
                        <li onClick={() => onSelectType(index)} className={classNames(availableType === index? 'pizza-setting__active' : '', !props.types.includes(index)? 'pizza-setting__disabled' : '','pizza-type')} key={`${pizzaType}_${index}`}>{pizzaType}</li>
                     ))

                  }
               </ul>
            </div>
            <div className='pizza-menu__sizes'>
               <ul>
                 
               {     
               
                     pizzaSizes.map((pizzaSize, index) => ( 
                        <li onClick={()=>onSelectSize(pizzaSize)} className={classNames(availableSize === pizzaSize? 'pizza-setting__active' : '', !props.sizes.includes(pizzaSize)? 'pizza-setting__disabled' : '','pizza-size')} key={`${pizzaSize}_${index}`}>{pizzaSize} см.</li>
                     ))

                  }
               </ul>
            </div>
         </div>
         <div className='price-and-btn'>
            <p className='pizza-price'>от {props.price} ₽</p>
            <button className='pizza-btn' onClick={onAddPizza}>
               <span className='pizza-btn__1'>&#43;</span>
               <span className='pizza-btn__2'>Добавить</span>
               {props.addedCount && <span className='pizza-btn__3'>{props.addedCount}</span>}
            </button>
         </div>
         </div>
     
   )
}

Pizza.propTypes = {
   name: PropTypes.string,
   url: PropTypes.string.isRequired,
   price: PropTypes.number,
   types: PropTypes.arrayOf(PropTypes.number),
   sizes: PropTypes.arrayOf(PropTypes.number),
   onClickAddPizza: PropTypes.func,
   addedCount: PropTypes.number,
};

Pizza.defaultProps = {
   name: '---',
   price: 0,
   types: [],
   sizes: [],
};

export default Pizza ;
