import React from 'react'

const Categories = React.memo(function Categories({ items, onClick }) {
	const [activeItem, setActiveItem] = React.useState(null)

	const onSelectItem = (index) => {
		setActiveItem(index)
		onClick(index)
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
})

export default Categories
