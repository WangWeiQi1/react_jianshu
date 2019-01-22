import axios from 'axios'

import * as actionTypes from './actionTypes'

import 'mock/mock'

export const getArticlesList = () => {
	return (dispatch) => {
		axios.get('/articles_list').then(res => {
			if (res.data.code === 0) {
				const action = {
					type: actionTypes.GET_ARTICLES_LIST,
					data: res.data.result
				}
				dispatch(action)
			}
		})
	}
}

export const changeLoading = (flag) => ({
	type: actionTypes.CHANGE_LOADING,
	flag
})

export const getMoreList = () => {
	return (dispatch) => {
		axios.get('/articles_list').then(res => {
			if (res.data.code === 0) {
				const action = {
					type: actionTypes.GET_MORE_LIST,
					data: res.data.result
				}
				dispatch(action)
			}
		})
	}
}

export const showTop = (flag) => ({
	type: actionTypes.SHOW_TOP,
	flag
})