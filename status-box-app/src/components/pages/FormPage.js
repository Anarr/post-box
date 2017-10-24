import React from 'react';
import  { Form } from 'semantic-ui-react';
import '../../styles/app.css';
import ColorsList from '../lists/ColorsList';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { focusForm } from '../../actions/focused-actions';
class FormPage extends React.Component {

	state = {
		comment:"",
		backgroundColor:"",
		error:false
	};


	getComment = (e) => {
		let comment = e.target.value;

		this.setState({"comment":comment});
	}

	render(){
		// variablelari multiple declare
		let currentColor,currentId;
		var focused  = (!this.props.commentBox) ? false: this.props.commentBox.focused ;
		let comment=this.state.comment;

		if(this.props.commentBox ){this.props.commentBox.value = comment;}

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
					<Form.TextArea value={this.comment} style={{backgroundColor:currentColor, color:"#fff" }} placeholder="Tell us more about you" className={ focused ? 'focusedBox' : 'unFocusedBox' } onClick = {()=>this.props.focusForm(comment)} onChange={this.getComment}/>
				</Form>
				<ColorsList currentId={currentId}/>
			</div>
		);
	}

}

function mapStateToProps(state){
	return {
		colors: state.activeColor,
		commentBox:state.commentBox
	}
}

function matchDisptachToProps(dispatch){
    return bindActionCreators(
        {
            focusForm:focusForm
        }, 
        dispatch
    );
}

export default connect(mapStateToProps,matchDisptachToProps)(FormPage); 