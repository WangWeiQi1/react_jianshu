import React from 'react'

import './common.scss'

import './statics/iconfont/iconfont.css'

import Header from 'common/header'

import Home from 'components/home'

import Login from 'components/login'

import Detail from 'components/detail'

import {
	Provider
} from 'react-redux'

import store from './store'

import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom'

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div>
						<Header />
						<Switch>
							<Route path="/home" component={Home} />
							<Route path="/login" component={Login} />
							<Route path="/detail/:id" component={Detail} />
							<Redirect from="/" to="/home" />
						</Switch>
					</div>
				</Router>
			</Provider>
		)
	}
}

export default App;