import React from 'react'

import './common.scss'

import './statics/iconfont/iconfont.css'

import Header from 'common/header'

import {
	Provider
} from 'react-redux'

import store from './store'

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Header />
			</Provider>
		)
	}
}

export default App;