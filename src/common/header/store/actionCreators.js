import * as actionTypes from './actionTypes'
import 'mock/mock'
import axios from 'axios'

export const getHotList = () => {
	return (dispatch) => {
		axios.get('/hot_list').then(res => {
			const result = res.data.result;
			const action = {
				type: actionTypes.GET_HOT_LIST,
				data: result,
				totalPage: parseInt(Math.ceil(result.length / 10))
			}
			dispatch(action)
		})
	}
}

export const searchFocus = () => ({
	type: actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
	type: actionTypes.SEARCH_BLUR
})

export const mouseEnter = () => ({
	type: actionTypes.MOUSE_ENTER
})

export const mouseLeave = () => ({
	type: actionTypes.MOUSE_LEAVE
})

export const changePage = (page) => ({
	type: actionTypes.CHANGE_PAGE,
	page
})