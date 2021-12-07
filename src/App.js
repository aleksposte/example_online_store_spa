import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Header } from './components'
import { Home , Cart } from './pages'

function App() {
	return (
		<div className="wrapper" >
			<Header />
			<div className="content">
				<Routes>
					<Route path="/" element={<Home />} exact />
					<Route path="/Cart" element={<Cart />} exact />
				</Routes>
			</div>
		</div>
	)
}

export default App

// class App extends React.Component {
// 	componentDidMount() {
// 		axios.get(`http://${window.location.host}/db.json`).then(({ data }) => {
// 			this.props.setPizzas(data.pizzas)
// 		})
// 	}
// 	render() {
// 		console.log(this.props);

// 		return (
// 			<div className="wrapper" >
// 				<Header />
// 				<div className="content">
// 					<Routes>
// 						<Route path="/" element={<Home items={this.props.items} />} />
// 						<Route path="/Cart" element={<Cart />} />
// 					</Routes>
// 				</div>
// 			</div>
// 		)
// 	}
// }

// const mapStateToProps = (state) => {
// 	return {
// 		items: state.pizzas.items
// 	}
// }

// const mapDispatchToProps = {
// 	setPizzas,
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)
