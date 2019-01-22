import * as actionTypes from './actionTypes'

const defaultState = {
	isLogin: false
}

export default (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.DO_LOGIN:
			return Object.assign({}, state, {
				isLogin: true
			})
		case actionTypes.UN_LOGIN:
			return Object.assign({}, state, {
				isLogin: false
			})
		default:
			return state;
	}
}