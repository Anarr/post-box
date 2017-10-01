import React from 'react';
import { Container,Button } from 'semantic-ui-react';

class AppContainer extends React.Component{

	state = {};

	render(){
		return (
			<Container>
			<Button basic color="olive">
				Click Here
				</Button>
			</Container>
		);
	}

}

export default AppContainer;