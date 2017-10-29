import React from 'react';
import { Button } from 'semantic-ui-react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { cancelForm, saveForm} from '../../actions/focused-actions';
import '../../styles/app.css';
class Footer extends React.Component {

    
    
    previewForm = () => alert("Yeah, form preview");

    render(){
        return(
            <div>
            <Button.Group>
                <Button onClick={this.props.cancelForm}>Cancel</Button>
                <Button.Or />
                <Button positive onClick={()=>this.props.saveForm(this.props.commentBox.value,this.props.commentBox.focused)} >Save</Button>
            </Button.Group>
            <Button basic color='olive' className="button_preview" onClick={this.previewForm}>Preview</Button>
            </div>
            
        );
    }
 
}


function mapStateToProps(state){
    return {
        commentBox:state.commentBox
    }
}

function matchDisptachToProps(dispatch){
    return bindActionCreators(
        {
            cancelForm: cancelForm,
            saveForm: saveForm
        }, 
        dispatch
    );
}


export default connect(mapStateToProps, matchDisptachToProps)(Footer);