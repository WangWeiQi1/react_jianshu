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

import {
	Link
} from 'react-router-dom'

import {
	actionCreators as loginActionCreators
} from '../../components/login/store'

class Header extends React.Component {
	getList(focused) {
		const {
			list,
			page,
			totalPage,
			handleMouseEnter,
			handleMouseLeave,
			mouseIn,
			handleChangePage
		} = this.props;
		const result = [];
		if (list !== undefined && list.length > 0) {
			for (let i = (page - 1) * 10; i < page * 10; i++) {
				if (list[i] !== undefined) {
					result.push(
						<div key={list[i]} className="searchInfoItem">{list[i]}</div>
					)
				}
			}
		}
		if (focused || mouseIn) {
			return (
				<div className="searchInfo"
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<div className="searchInfoTitle">
						热门搜索
						<div className="searchInfoSwitch"
							onClick={() => {handleChangePage(page,totalPage,this.spin)}}
						>
							<i className="iconfont icon-spin spin" ref={(spin) => {this.spin = spin}}></i>
							换一批
						</div>
					</div>
					<div className="searchInfoList">
						{result}
					</div>
				</div>
			)
		} else {
			return null;
		}
	}
	render() {
		const {
			focused,
			list,
			isLogin,
			handleInputFocus,
			handleInputBlur
		} = this.props;
		return (
			<div className="header-container clearfix">
				<Link to="/home">
					<div className="header-left"></div>
				</Link>
				<div className="header-center">
					<Link to="/home">
						<div className="navItem left active">首页</div>
					</Link>
					<div className="navItem left">下载App</div>
					{
						isLogin ? 
						<Link to="/login">
							<div className="navItem right" onClick={this.props.unlogin}>退出</div>
						</Link> :
						<Link to="/login">
							<div className="navItem right">登陆</div>
						</Link>
					}
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
						{this.getList(focused)}
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
		focused: state.header.focused,
		list: state.header.hot_list,
		page: state.header.page,
		totalPage: state.header.totalPage,
		mouseIn: state.header.mouseIn,
		isLogin: state.login.isLogin
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus() {
			dispatch(actionCreators.getHotList())
			dispatch(actionCreators.searchFocus())
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlur())
		},
		handleMouseEnter() {
			dispatch(actionCreators.mouseEnter())
		},
		handleMouseLeave() {
			dispatch(actionCreators.mouseLeave())
		},
		handleChangePage(page, totalPage, spin) {
			let deg = spin.style.transform.replace(/[^0-9]/g, '');
			if (deg) {
				deg = Number(deg)
			} else {
				deg = 0;
			}
			spin.style.transform = `rotate(${deg + 360}deg)`;
			if (page < totalPage) {
				dispatch(actionCreators.changePage(page + 1))
			} else {
				dispatch(actionCreators.changePage(1))
			}
		},
		unlogin() {
			dispatch(loginActionCreators.unlogin())
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header);