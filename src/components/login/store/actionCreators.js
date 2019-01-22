import * as actionTypes from './actionTypes'

export const toLogin = () => ({
	type: actionTypes.DO_LOGIN
})

export const unlogin = () => ({
	type: actionTypes.UN_LOGIN
})