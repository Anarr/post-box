import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import PostTypesContainer from './PostTypesContainer';
import FormPage from './pages/FormPage';

class AppContainer extends React.Component{

	state = {};

	render(){
		return (
			<Container>
				<Header size="medium">
					<PostTypesContainer />
				</Header>
				
				<Header size="medium">
					<FormPage/>
				</Header>
				

				<Header size="medium">
					This is header
				</Header>
			</Container>
		);
	}

}

export default AppContainer;