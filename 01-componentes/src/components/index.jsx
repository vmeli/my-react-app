import React, { Component} from 'react'
import CardThumbnailList from './CardThumbnailList';

class App extends Component {
	constructor(...props) {
		super(...props)
		
		this.state = {
			data: []
		}
	}

	componentDidMount() {
		fetch('http://www.json-generator.com/api/json/get/bUKcIdXpAi?indent=2')
			.then(response => response.json())
			.then(myJson => {
				myJson.pots.map((item) => {
					let data = {
						title: item.title,
						img: item.multimedia
					}
					this.setState({ data:this.state.data.concat([data])})
				})
			})
	}
	
	
	render() {
		return (
			<CardThumbnailList cardThumbnail={this.state.data}/>
		)
	}
}


export default App