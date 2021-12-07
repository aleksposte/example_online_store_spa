const initialState = {
	items: {},
	totalCount: 0,
	totalPrice: 0,
}

const getTotolPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0)

const _getValue = (obj, path) => {
	const [firstKey, ...keys] = path.split('.')
	return keys.reduce((val, key) => {
		return val[key]
	}, obj[firstKey])
}

const getTotalSum = (obj, path) => {
	return Object.values(obj).reduce((sum, obj) => {
		const value = _getValue(obj, path)
		return sum + value
	}, 0)
}

const cart = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_PIZZA_CART': {
			const currentPizzaItems = !state.items[action.payload.id]
				? [action.payload]
				: [...state.items[action.payload.id].items, action.payload]

			const newItems = {
				...state.items,
				[action.payload.id]: {
					items: currentPizzaItems,
					totalPrice: getTotolPrice(currentPizzaItems)
				}
			}

			// const totalCount = Object.keys(newItems).reduce((sum, key) => newItems[key].items.length + sum, 0)
			// const totalPrice = Object.keys(newItems).reduce((sum, key) => newItems[key].totalPrice + sum, 0)

			const totalCount = getTotalSum(newItems, 'items.length')
			const totalPrice = getTotalSum(newItems, 'totalPrice')

			return {
				...state,
				items: newItems,
				totalCount,
				totalPrice,
			}
		}

		case 'CLEAR_CART': {
			return {
				items: {},
				totalCount: 0,
				totalPrice: 0,
			}
		}

		case 'REMOVE_CART_ITEM': {
			const newItems = {
				...state.items,
			}

			const currenTotalCount = newItems[action.payload].items.length
			const currentTotalPrice = newItems[action.payload].totalPrice

			delete newItems[action.payload]

			return {
				...state,
				items: newItems,
				totalCount: state.totalCount - currenTotalCount,
				totalPrice: state.totalPrice - currentTotalPrice,
			}
		}

		case 'ADD_CART_PIZZA_ITEM': {
			const newObjItems = [
				...state.items[action.payload].items,
				state.items[action.payload].items[0],
			]

			const newItems = {
				...state.items,
				[action.payload]: {
					items: newObjItems,
					totalPrice: getTotolPrice(newObjItems),
				}
			}

			const totalCount = getTotalSum(newItems, 'items.length')
			const totalPrice = getTotalSum(newItems, 'totalPrice')

			return {
				...state,
				items: newItems,
				totalCount,
				totalPrice,
			}
		}

		case 'REMOVE_CART_PIZZA_ITEM': {
			const prevItems = state.items[action.payload].items
			const newObjItems = prevItems.length > 1 ? state.items[action.payload].items.slice(1) : prevItems

			const newItems = {
				...state.items,
				[action.payload]: {
					items: newObjItems,
					totalPrice: getTotolPrice(newObjItems),
				}
			}

			const totalCount = getTotalSum(newItems, 'items.length')
			const totalPrice = getTotalSum(newItems, 'totalPrice')

			return {
				...state,
				items: newItems,
				totalCount,
				totalPrice,
			}
		}

		default:
			return state
	}
}

export default cart
