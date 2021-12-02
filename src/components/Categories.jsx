import React from 'react'
import PropTypes from 'prop-types'

const Categories = React.memo(function Categories({ activeCategory, onClickCategory, items }) {

	return (
		<div className="categories">
			<ul>
				<li className={activeCategory === null ? 'active' : ''}
					onClick={() => onClickCategory(null)}>
					Все
				</li>
				{
					items &&
					items.map((el, index) => (
						<li className={activeCategory === index ? 'active' : ''}
							onClick={() => onClickCategory(index)}
							key={`${el}_${index}`}>
							{el}
						</li>
					))
				}
			</ul>
		</div>
	)
})

Categories.propTypes = {
	// activeCategory: PropTypes.oneOf([PropTypes.number, null]),
	onClickCategory: PropTypes.func.isRequired,
	items: PropTypes.arrayOf(PropTypes.string).isRequired,
}

Categories.default = {
	activeCategory: null,
	items: [],
}

export default Categories
