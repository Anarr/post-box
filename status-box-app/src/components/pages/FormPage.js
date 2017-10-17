import React from 'react';
import  { Form } from 'semantic-ui-react';
import '../../styles/app.css';
import ColorsList from '../lists/ColorsList';
import { connect } from 'react-redux';

class FormPage extends React.Component {

	state = {
		focused:false,
		backgroundColor:""
	};

	handleStatusBox = (e) => {
		// let focused = this.state.focused ? false : true;
		let focused = true;
		this.setState({focused:focused});
	}


	render(){
		let currentColor,currentId;
		const { focused } = this.state;

		if(!this.props.colors){
			currentColor = "";
			currentId = 0;
		}else{
			currentColor = this.props.colors.color;
			currentId = this.props.colors.id;
		}

		return(
			<div className="formPage" >
				<Form>
					<Form.TextArea style={{backgroundColor:currentColor}} placeholder="Tell us more about you" className={ focused ? 'focusedBox' : 'unFocusedBox' } onFocus={this.handleStatusBox.bind(this)}/>
				</Form>
				<ColorsList currentId={currentId}/>
			</div>
		);
	}

}

function mapStateToProps(state){
	return {
		colors: state.activeColor
	}
}


export default connect(mapStateToProps)(FormPage); 