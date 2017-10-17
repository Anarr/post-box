import React from 'react';
import { Button } from 'semantic-ui-react';

class Footer extends React.Component {

    cancelForm = () =>{
        alert("Form cancelld");
    }

    saveForm = () => alert("Form saved");

    render(){
        return(
            <Button.Group>
                <Button onClick={this.cancelForm}>Cancel</Button>
                <Button.Or />
                <Button positive onClick={this.saveForm} >Save</Button>
            </Button.Group>
        );
    }

}

export default Footer;