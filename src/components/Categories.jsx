import React from 'react'

const Categories = ({ items, onClick }) =>  {
	// console.log("items", items);
	// const [state, setstate] = useState(initialState)
	const [activeItem, setActiveItem] = React.useState(null)
	const [count, setCount] = React.useState(null)

	const onSelectItem = (index) => {
		// setstate(index)
		setActiveItem(index)
	}

	return (
		<div className="categories">
			<ul>
				<li className={activeItem === null ? 'active' : ''}
					onClick={() => onSelectItem(null)}>
					Все
				</li>
				{	
					items &&
						items.map((el, index) => (
							<li className={activeItem === index ? 'active' : ''}
								onClick={() => onSelectItem(index)}
								key={`${el}_${index}`}>
								{el}
							</li>
						))
				}
			</ul>
		</div>
	)
}

export default Categories
