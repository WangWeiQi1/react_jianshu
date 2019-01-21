import React from 'react'

import './index.scss'

import {
	connect
} from 'react-redux'

import {
	actionCreators
} from './store'

import {
	CSSTransition
} from 'react-transition-group';

class Header extends React.Component {
	render() {
		const {
			focused,
			handleInputFocus,
			handleInputBlur
		} = this.props;
		return (
			<div className="header-container clearfix">
				<div className="header-left"></div>
				<div className="header-center">
					<div className="navItem left active">首页</div>
					<div className="navItem left">下载App</div>
					<div className="navItem right">登陆</div>
					<div className="navItem right">
						<i className="iconfont icon-Aa"></i>
					</div>
					<div className="searchWrapper">
						<CSSTransition
							in={focused}
							timeout={300}
							classNames="slide"
						>
							<input 
								onFocus={handleInputFocus}
								onBlur={handleInputBlur}
								className={focused ? 'focused' : ''} 
								type="text" 
								placeholder="搜索" />
						</CSSTransition>
						<i className={focused ? 'focused iconfont icon-fangdajing zoom' : 'iconfont icon-fangdajing zoom'}></i>
						<div className="searchInfo">
							<div className="searchInfoTitle">
								热门搜索
								<div className="searchInfoSwitch">
									<i className="iconfont icon-spin spin"></i>
									换一批
								</div>
							</div>
							<div className="searchInfoList">
								<div className="searchInfoItem">xx</div>
							</div>
						</div>
					</div>
				</div>
				<div className="header-right">
					<div className="register">注册</div>
					<div className="writeArticle">
						<i className="iconfont icon-iconset0137"></i>
						写文章
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		focused: state.header.focused
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus() {
			dispatch(actionCreators.searchFocus())
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlur())
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header);