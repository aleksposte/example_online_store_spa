import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Categories, PizzaBlock, PizzaLoadingBlock, SortPopup } from '../components'
import LoadingBlock from '../components/PizzaBlock/LoadingBlock'
import { setCategory } from '../redux/actions/filters'
import { setPizzas, fetchPizzas } from '../redux/actions/pizzas'

const categoryNames = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]
const sortItems = [
	{ name: 'популярности', type: 'populat' },
	{ name: 'цене', type: 'price' },
	{ name: 'алфавиту', type: 'alphabet' },
]

function Home() {
	const dispatch = useDispatch()
	const items = useSelector(({ pizzas }) => pizzas.items)
	// isLoaded
	const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)

	const onSelectCategory = React.useCallback((index) => {
		dispatch(setCategory(index))
	},[])

	// first render 
	React.useEffect(() => {
		if (!items.length) {
			dispatch(fetchPizzas())
		}
	}, [])

	return (
		<div className="container">
			<div className="content__top">
				<Categories
					onClick={onSelectCategory}
					items={categoryNames}
				/>
				<SortPopup
					items={sortItems}
				/>
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
			{
				isLoaded 
					? items.map(el => <PizzaBlock key={el.id} isLoading={true} {...el} />)
					: Array(10).fill(<LoadingBlock />)
			}
			</div>
		</div>
	)
}

export default Home
