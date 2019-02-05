import React, { Component} from 'react'
import CoursesList from './CoursesList'
import CourseAddForm from './CourseAddForm'
 	import PropTypes from 'prop-types';

class App extends Component {
	constructor(...props) {
		super(...props)
		
		this.state = {
			courses: [
				{ id: 1, name: 'React', teacher: 'Francisco'},
				{ id: 2, name: 'Seo', teacher: 'Silvana'}
			]
		}

		this.handleOnAddCourse = this.handleOnAddCourse.bind(this)
	}

	handleOnAddCourse(e) {
		e.preventDefault(); // no mande data el form
		let form    = e.target,
			course  = {
				id: form.id.value,
				name: (form.name.value) ? form.name.value : App.defaultProps.name,
				teacher: (form.teacher.value) ? form.teacher.value : App.defaultProps.teacher
			}
		this.setState({ // update state
			courses: this.state.courses.concat([course])
		})
		form.reset()
	}
	
	render() {
		return (
			<div>
				<CourseAddForm onAddCourse={this.handleOnAddCourse} /> 
				<CoursesList courses = {this.state.courses} />
			</div>
		)
	}
}

App.propTypes = {//definiendo los datos
	id: PropTypes.number,
	name: PropTypes.string.isRequired,
	teacher: PropTypes.string.isRequired
}

App.defaultProps = {//datos por default
	name: 'Curso Desconocido',
	teacher: 'Profesor No Asignado'
}



export default App