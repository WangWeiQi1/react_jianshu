import React from 'react'

import './index.scss'

import Carousel from 'common/carousel'

import Articles from './articles'

import {
	connect
} from 'react-redux'

import {
	actionCreators
} from './store'

import {
	Button
} from 'antd'

class Home extends React.Component {
	componentDidMount() {
		this.props.getArticlesList();
		this.bindEvents();
	}
	bindEvents() {
		window.addEventListener('scroll', () => this.props.handleScroll(this.props.isShowLoading, this.props.isShowTop), false)
	}
	componentWillUnMount() {
		window.removeEventListener('scroll', this.props.handleScroll, false)
	}
	handleToTop() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<div className="main-container">
				<div className="carousel">
					<Carousel />
				</div>
				<div className="articles">
					<Articles />
					{
						this.props.isShowTop ? 
						<div className="goToTop">
							<Button onClick={() => this.handleToTop()}>回到顶部</Button>
						</div> : 
						''
					}
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getArticlesList() {
			dispatch(actionCreators.getArticlesList())
		},
		handleScroll(isShowLoading, isShowTop) {
			var clientHeight = document.documentElement.clientHeight;
			var scrollHeight = document.documentElement.scrollHeight;
			var scrollTop = document.documentElement.scrollTop;
			if (clientHeight + scrollTop === scrollHeight) {
				!isShowLoading && dispatch(actionCreators.changeLoading(true))
				dispatch(actionCreators.getMoreList())
			} else {
				isShowLoading && dispatch(actionCreators.changeLoading(false))
			}
			if (scrollTop > 700) {
				!isShowTop && dispatch(actionCreators.showTop(true))
			} else {
				isShowTop && dispatch(actionCreators.showTop(false))
			}
		}
	}
}

const mapStateToProps = (state) => {
	return {
		isShowLoading: state.home.isShowLoading,
		isShowTop: state.home.isShowTop
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);