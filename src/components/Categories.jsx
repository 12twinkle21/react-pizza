import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(function Categories(props) { 

   

   return (

      <div className='categories'>
         <ul className='category-list'>
            <li className={props.activeCategory===null? ' active-category category' : 'category' } onClick={() => props.onClickItems(null)}>Все</li>
            {
               props.categories.map((category, index) => (
                  <li className={props.activeCategory===index? ' active-category category' : 'category' } onClick={() => props.onClickItems(index)} key={`${category}_${index}`}>{category}</li>
            ))
            }
      </ul>
      </div>
      
   )

})

Categories.propTypes = {
   //activeCategory: PropTypes.oneOf([PropTypes.number, null]),
   items: PropTypes.arrayOf(PropTypes.string).isRequired,
   onClickItems: PropTypes.func.isRequired,
};

Categories.defaultProps = {
   activeCategory: null,
   items: [],
};

export default Categories;
