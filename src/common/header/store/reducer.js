import * as actionTypes from './actionTypes'

const defaultState = {
	focused: false,
	hot_list: [],
	mouseIn: false,
	page: 1,
	totalPage: 0
}

export default (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.GET_HOT_LIST:
			return Object.assign({}, state, {
				hot_list: action.data,
				totalPage: action.totalPage
			})
		case actionTypes.SEARCH_FOCUS:
			return Object.assign({}, state, {
				focused: true
			})
		case actionTypes.SEARCH_BLUR:
			return Object.assign({}, state, {
				focused: false
			})
		case actionTypes.MOUSE_ENTER:
			return Object.assign({}, state, {
				mouseIn: true
			})
		case actionTypes.MOUSE_LEAVE:
			return Object.assign({}, state, {
				mouseIn: false
			})
		case actionTypes.CHANGE_PAGE:
			return Object.assign({}, state, {
				page: action.page
			})
		default:
			return state;
	}
}