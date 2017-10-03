import React from 'react';
import  { Form } from 'semantic-ui-react';
import '../../styles/app.css';


class FormPage extends React.Component {

	state = {
		focused:false
	};


	handleStatusBox = (e) => {

		let focused = this.state.focused ? false : true;

		this.setState({focused:focused});
	}



	render(){

		const { focused } = this.state;

		return(
			<Form>
				<Form.TextArea placeholder="Tell us more about you" className={ focused ? 'focusedBox' : 'unFocusedBox' } onBlur = {this.handleStatusBox}	 onFocus={this.handleStatusBox}/>
			</Form>
		);
	}

}



export default FormPage; 