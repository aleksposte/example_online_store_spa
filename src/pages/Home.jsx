import React from 'react'
import { Categories, PizzaBlock, SortPopup } from '../components'

function Home({ items }) {
	return (
		<div className="container">
			<div className="content__top">
				<Categories
					onClick={(el) => { console.log("click", el) }}
					items={["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]}
				/>
				<SortPopup
					items={[
						{ name: 'популярности', type: 'populat'}, 
						{ name: 'цене', type: 'price'},
						{ name: 'алфавиту', type: 'alphabet'},
					]}
				/>
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
			{
				items.map(el => (
					<PizzaBlock key={el.id} {...el} />
				))
			}
			</div>
		</div>
	)
}

export default Home
