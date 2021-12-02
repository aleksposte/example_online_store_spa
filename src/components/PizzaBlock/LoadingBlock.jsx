import React from 'react'
import ContentLoader from "react-content-loader"

function LoadingBlock() {
	return (
		<ContentLoader
			speed={2}
			width={280}
			height={460}
			viewBox="0 0 280 460"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb"
		>
			<circle cx="125" cy="163" r="122" />
			<rect x="6" y="304" rx="0" ry="0" width="245" height="42" />
			<rect x="4" y="365" rx="0" ry="0" width="245" height="42" />
		</ContentLoader>
	)
}

export default LoadingBlock
