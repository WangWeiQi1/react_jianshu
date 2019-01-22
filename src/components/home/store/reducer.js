import * as actionTypes from './actionTypes'

const defaultState = {
	isShowLoading: false,
	isShowTop: false,
	articlesList: []
}

export default (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.GET_ARTICLES_LIST:
			return Object.assign({}, state, {
				articlesList: action.data
			})
		case actionTypes.CHANGE_LOADING:
			return Object.assign({}, state, {
				isShowLoading: action.flag
			})
		case actionTypes.GET_MORE_LIST:
			return Object.assign({}, state, {
				articlesList: state.articlesList.concat(action.data)
			})
		case actionTypes.SHOW_TOP:
			return Object.assign({}, state, {
				isShowTop: action.flag
			})
		default:
			return state;
	}
}