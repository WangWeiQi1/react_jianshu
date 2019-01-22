import React from 'react'

import './index.scss'

import {
	connect
} from 'react-redux'

import Loading from 'common/loading'

import {
	Link
} from 'react-router-dom'

class Articles extends React.Component {
	render() {
		return (
			<div>
				{
					this.props.articlesList.map((item, index) => {
						return (
							<div className="articles-container" key={index}>
									<div className="articles-left">
										<a href={`/detail/${item.id}`} className={item.cover.length > 0 ? "articles-title isCover" : "articles-title disCover"}>{item.title}</a>
										<p className={item.cover.length > 0 ? "articles-content isCover" : "articles-content disCover"}>{item.desc}</p>
									</div>
									<Link to={`/detail/${item.id}`}>
										<img width={150} height={100} src={item.cover} alt=""/>
									</Link>
							</div>
						)
					})
				}
				{
					this.props.isShowLoading ? 
					<div className="loading-container">
						<Loading />
					</div> :
					''
				}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		articlesList: state.home.articlesList,
		isShowLoading: state.home.isShowLoading
	}
}

export default connect(
	mapStateToProps,
	null
)(Articles);