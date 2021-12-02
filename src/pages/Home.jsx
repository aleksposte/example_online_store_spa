import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Categories, PizzaBlock, PizzaLoadingBlock, SortPopup } from '../components'
import LoadingBlock from '../components/PizzaBlock/LoadingBlock'
import { setCategory, setSortBy } from '../redux/actions/filters'
import { setPizzas, fetchPizzas } from '../redux/actions/pizzas'

const categoryNames = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]
const sortItems = [
	{ name: 'популярности', type: 'popular' },
	{ name: 'цене', type: 'price' },
	{ name: 'алфавиту', type: 'name' },
]

function Home() {
	const dispatch = useDispatch()
	const items = useSelector(({ pizzas }) => pizzas.items)
	// isLoaded
	const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)
	// filters
	const { category, sortBy } = useSelector(({ filters }) => filters)

	// first render 
	React.useEffect(() => {
		dispatch(fetchPizzas(category, sortBy))
	}, [category, sortBy])

	const onSelectCategory = React.useCallback((index) => {
		dispatch(setCategory(index))
	},[])

	const onSelectSortType = React.useCallback((type) => {
		dispatch(setSortBy(type))
	}, [])

	return (
		<div className="container">
			<div className="content__top">
				<Categories
					activeCategory={category}
					onClickCategory={onSelectCategory}
					items={categoryNames}
				/>
				<SortPopup
					activeSortType={sortBy}
					onClickSortType={onSelectSortType}
					items={sortItems}
				/>
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
			{
				isLoaded 
					? items.map(el => <PizzaBlock key={el.id} isLoading={true} {...el} />)
						: Array(12).fill(0).map((_, index) => <LoadingBlock key={index} />)
			}
			</div>
		</div>
	)
}

export default Home
