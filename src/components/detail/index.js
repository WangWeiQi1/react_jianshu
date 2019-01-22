import React from 'react'

class Detail extends React.Component {
	render() {
		console.log(this.props.match.params.id)
		return (
			<div>detail</div>
		)
	}
}

export default Detail;