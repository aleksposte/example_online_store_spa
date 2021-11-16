import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import { Header } from './components'
import { Home , Cart } from './pages'
import setPizzas from './redux/actions/pizzas'

const urlDb = `http://${window.location.host}/db.json`;

// function App() {
// 	// const [pizzas, setPizzas] = React.useState([])

// 	React.useEffect(() => {
// 		axios.get(urlDb).then(({ data }) => {
// 			setPizzas(data.pizzas)
// 		})
// 	}, [])

// 	return (
// 		<div className="wrapper">
// 			<Header />
// 			<div className="content">
// 				<Routes>
// 					{/* <Route exact path="/" element={<Home />} /> */}
// 					<Route path="/" element={<Home items={pizzas} />} />
// 					<Route path="/Cart" element={<Cart />} />
// 				</Routes>
// 			</div>
// 		</div>
// 	);
// }


class App extends React.Component {
	componentDidMount() {
		axios.get(`http://${window.location.host}/db.json`).then(({ data }) => {
			// window.store.dispatch(setPizzas(data.pizzas))
			this.props.setPizzas(data.pizzas)
		})
	}
	
	

	render() {
		console.log(this.props);

		return (
			<div className="wrapper" >
				<Header />
				<div className="content">
					<Routes>
						{/* <Route exact path="/" element={<Home />} /> */}
						<Route path="/" element={<Home items={this.props.items} />} />
						<Route path="/Cart" element={<Cart />} />
					</Routes>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		items: state.pizzas.items
	}
}

const mapDispatchToProps = {
	setPizzas,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

// export default App
