let initialState = {
   items: {},
   totalPrice: 0,
   totalCount: 0,
};

let getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0);

let _get = (obj, path) => {
   let [firstKey, ...keys] = path.split('.');
   return keys.reduce((val, key) => {
      return val[key];
   }, obj[firstKey]);
};

let getTotalSum = (obj, path) => {
   return Object.values(obj).reduce((sum, obj) => {
      let value = _get(obj, path);
      return sum + value;
   }, 0);
};

let cart = (state = initialState, action) => {
   switch (action.type) {

      case 'ADD_PIZZA_CART':

         let currentPizzaItems = !state.items[action.payload.id] ? [action.payload] : [
            ...state.items[action.payload.id].items,
            action.payload];
         
         let newItems = {
            ...state.items,
            [action.payload.id]: {
               items: currentPizzaItems,
               totalPrice: getTotalPrice(currentPizzaItems),
               }
         }
         let items = Object.values(newItems).map((obj) => obj.items);
         let allPizzas = [].concat.apply([], items);
         let totalPrice = getTotalPrice(allPizzas);

         return {
            ...state,
            items: newItems,
            totalCount: allPizzas.length,
            totalPrice,
         };
      
      case 'REMOVE_CART_PIZZA':
         
         let removeCartItems = { ...state.items, };
         let currentTotalPrice = removeCartItems[action.payload].totalPrice;
         let currentTotalCount = removeCartItems[action.payload].items.length;
         delete removeCartItems[action.payload];
         
            return {
               ...state,
               items: removeCartItems,
               totalPrice: state.totalPrice - currentTotalPrice,
               totalCount: state.totalCount - currentTotalCount,
         }
      
      case 'PLUS_PIZZA':

         let newObjItemsForPlus = [...state.items[action.payload].items,
         state.items[action.payload].items[0]]
         
         let newItemsForPlus = {
            ...state.items,
            [action.payload]: {
               items: newObjItemsForPlus ,
               totalPrice: getTotalPrice(newObjItemsForPlus ),
            },
         };

         let totalCountForPlus = getTotalSum(newItemsForPlus, 'items.length');
         let totalPriceForPlus = getTotalSum(newItemsForPlus, 'totalPrice');

         return {
               ...state,
            items: newItemsForPlus,
            totalPrice: totalPriceForPlus,
            totalCount: totalCountForPlus,
         }
      
         case 'MINUS_PIZZA':
         let oldItemsForMinus = state.items[action.payload].items;
         let newObjItemsForMinus = oldItemsForMinus.length > 1 ? state.items[action.payload].items.slice(1) : oldItemsForMinus;
         
         let newItemsForMinus = {
            ...state.items,
            [action.payload]: {
               items: newObjItemsForMinus,
               totalPrice: getTotalPrice(newObjItemsForMinus),
            },
         };
         
         let totalCountForMinus = getTotalSum(newItemsForMinus, 'items.length');
         let totalPriceForMinus = getTotalSum(newItemsForMinus, 'totalPrice');

         return {
            ...state,
            items: newItemsForMinus,
            totalPrice: totalPriceForMinus,
            totalCount: totalCountForMinus,
         }
      
         
      
      case 'CLEAR_CART':
         return {
            items: {},
            totalPrice: 0,
            totalCount: 0,
         }
        
      
      default:
         return state;
   } 
}

export default cart;