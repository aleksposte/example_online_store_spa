import React from 'react'
import axios from 'axios'
// import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import { Header } from './components'
import { Home , Cart } from './pages'
import { setPizzas, fetchPizzas } from './redux/actions/pizzas'


function App() {
	const dispatch = useDispatch()

	// first render 
	React.useEffect(() => {
		dispatch(fetchPizzas())
	}, [])

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

export default App
