import {
	combineReducers
} from 'redux'

import {
	reducer as headerReducer
} from 'common/header/store'

import {
	reducer as homeReducer
} from 'components/home/store'

import {
	reducer as loginReducer
} from 'components/login/store'

const reducer = combineReducers({
	header: headerReducer,
	home: homeReducer,
	login: loginReducer
})

export default reducer