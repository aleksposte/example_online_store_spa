export const addPizzaToCart = (pizzaObj) => ({
	type: 'ADD_PIZZA_CART',
	payload: pizzaObj,
})

export const clearCart = () => ({
	type: 'CLEAR_CART',
})

export const removeCartItem = (id) => ({
	type: 'REMOVE_CART_ITEM',
	payload: id,
})

export const addCartPizzaItem = (id) => ({
	type: 'ADD_CART_PIZZA_ITEM',
	payload: id,
})

export const removeCartPizzaItem = (id) => ({
	type: 'REMOVE_CART_PIZZA_ITEM',
	payload: id,
})

