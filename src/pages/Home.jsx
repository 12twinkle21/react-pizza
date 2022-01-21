import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Categories from '../components/Categories';
import SortPopup from '../components/SortPopup';
import Pizza from '../components/pizzaComponents/Pizza';
import LoadingPizzaBlock from '../components/pizzaComponents/LoadingPizzaBlock';

import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';



const categories = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [{ name: 'популярности', type: 'popular', order: 'desc' }, { name: 'цене', type: 'price', order: 'asc' }, { name: 'алфавиту', type: 'name', order: 'asc' }];

function Home() {

   let dispatch = useDispatch();

   let items = useSelector(({ pizzasReducer }) => pizzasReducer.items);
   let isLoaded = useSelector(({ pizzasReducer }) => pizzasReducer.isLoaded);
   let cartItems = useSelector(({ cartReducer }) => cartReducer.items); 
   let { category, sortBy } = useSelector(({ filtersReducer }) => filtersReducer);

   let onSelectCategory = React.useCallback((index) => {

      dispatch(setCategory(index));

   }, []);

   let onSelectSortType = React.useCallback((type) => {

      dispatch(setSortBy(type));

   }, []);

   React.useEffect(() => {

      dispatch(fetchPizzas(sortBy, category));

   }, [category, sortBy]);
   
   let handleAddPizzaToCart = obj => {
      dispatch({
         type: 'ADD_PIZZA_CART',
         payload: obj,
      })
   }

   return (

      <div className='content'>
         <div className='sort-container'>
            <Categories activeCategory={category} onClickItems={onSelectCategory} categories={categories} />
            <SortPopup activeSortType={sortBy.type} sortItems={sortItems} onClickSortType={onSelectSortType} />
         </div>
            <div className='pizzas-block'>
               <h2 className='pizzas-title'>Все пиццы</h2>
               <div className='pizzas'>
               {
                  isLoaded ?
                     items.map(obj => <Pizza onClickAddPizza={handleAddPizzaToCart} key={obj.id} name={obj.name} url={obj.imageUrl} price={obj.price} types={obj.types} sizes={obj.sizes} id={obj.id} addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}/>) : Array(12).fill(0).map((_, index) => <LoadingPizzaBlock key={ index }/>)
               }
                  </div>
               </div>
         </div>
   
   )
}

export default Home;
