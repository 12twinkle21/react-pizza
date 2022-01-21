export let addPizzaToCart = (pizzaObj) => ({
   type: 'ADD_PIZZA_CART',
   payload: pizzaObj
});

export let clearCart = () => ({
   type: 'CLEAR_CART',
});

export let removeCartPizza = (id) => ({
   type: 'REMOVE_CART_PIZZA',
   payload: id,
});

export let plusCartPizza = (id) => ({
   type: 'PLUS_PIZZA',
   payload: id,
});

export let minusCartPizza = (id) => ({
   type: 'MINUS_PIZZA',
   payload: id,
});