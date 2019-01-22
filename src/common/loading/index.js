import React from 'react'

class Loading extends React.Component {
	render() {
		return (
			<div>
				<img src={require('statics/123.gif')} alt=""/>
			</div>
		)
	}
}

export default Loading;