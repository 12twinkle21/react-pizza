 export let setPizzas = (items) => ({
   type: 'SET_PIZZAS',
   payload: items,
});

export let fetchPizzas = (sortBy, category) => (dispatch) => {
   dispatch(setLoaded(false));
   fetch(`/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`).then((resp) => resp.json()).then((json) => { dispatch(setPizzas(json)) });
};

export let setLoaded = payload => ({
   type: 'SET_LOADED',
   payload,
})