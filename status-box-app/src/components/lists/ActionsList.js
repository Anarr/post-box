import React from 'react';
import { Menu } from 'semantic-ui-react';

class ActionsList extends React.Component{

	render(){
		return(
			<Menu.Item name={this.props.menu} active={this.props.active} onClick={this.props.onClick}/>
		);
	}

}

export default ActionsList;