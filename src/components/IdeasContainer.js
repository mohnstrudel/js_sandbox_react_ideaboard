import React, { Component } from 'react'
import axios from 'axios'

class IdeasContainer extends Component {
	componentDidMount(){
		axios.get('http://localhost:3001/api/v1/ideas.json')
		.then(response => {
			console.log(response)
			this.setState({ideas: response.data})
		})
		.catch(error => console.log(error))
	}

	render() {
		return (
			<div>
				{this.state.ideas.map((idea) => {
					
				})}
			</div>
		)
	}
}

export default IdeasContainer