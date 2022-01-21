import React from 'react';
import PropTypes from 'prop-types';

const SortPopup = React.memo(function SortPopup(props) {
   let [visiblePopup, setVisiblePopup] = React.useState(false);
   let sortRef = React.useRef();
   let activeLabel = props.sortItems.find(obj => obj.type === props.activeSortType).name;

   React.useEffect(() => {
      document.body.addEventListener('click', handleOutsideClick)
   }, []);

   

   let toggleVisiblePopUp = () => {
      setVisiblePopup(!visiblePopup);
   }

   
   let handleOutsideClick = (e) => {
      const path = e.path || (e.composedPath && e.composedPath()) || e.composedPath(e.target);
      if (!path.includes(sortRef.current)) { 
         setVisiblePopup(false);
      }
   }
   let onSelectItem = (index) => {
      props.onClickSortType(index)
   };

   return (

      <div className='sort'>
         <img className={visiblePopup? 'sort-arrow__open sort-arrow' : 'sort-arrow__close sort-arrow'} src='./img/arrowSort.png' width='10' height='6' alt='arrowSort' />
         <b className='sort__text'>Сортировка по:</b>
         <span className='sort__select' onClick={toggleVisiblePopUp} ref={sortRef}>{activeLabel}</span>
         {visiblePopup && (
            <div className='popup'>
               <ul className='popup-list'>
                  {
                     props.sortItems.map((obj, index) => (
                        <li className={props.activeSortType === obj.type ? 'active-popup-item' : ''} onClick={() => onSelectItem(obj)} key={`${obj.type}_${index}`}>по {obj.name}</li>
                     ))
                  }
               </ul>
            </div>
         )}
      </div>
      
   )

})

SortPopup.propTypes = {
   activeSortType: PropTypes.string.isRequired,
   sortItems: PropTypes.arrayOf(PropTypes.object).isRequired,
   onClickSortType: PropTypes.func.isRequired,
};

SortPopup.defaultProps = {
   sortItems: [],
}

export default SortPopup;
