import React, {
	Component
} from 'react'

import './index.scss'

import {
	Card,
	Input,
	Icon,
	Button
} from 'antd'

import {
	connect
} from 'react-redux'

import {
	actionCreators
} from './store'

import {
	Redirect
} from 'react-router-dom'

class Login extends Component {
	render() {
		return (
			<div className="login-container">
				{
					!this.props.isLogin ?
					<Card title="登陆">
						<Input 
							prefix={<Icon type="user" />}
							placeholder="请输入用户名" />
						<Input 
							type="password"
							prefix={<Icon type="lock" />}
							placeholder="请输入密码" />
						<Button block={true} type="primary" onClick={this.props.toLogin}>登陆</Button>
					</Card> :
					<Redirect to="/home" />
				}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		isLogin: state.login.isLogin
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		toLogin() {
			dispatch(actionCreators.toLogin())
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);