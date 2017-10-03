import React from 'react';
import { Menu } from 'semantic-ui-react';
import ActionsList from './lists/ActionsList';

class PostTypesContainer extends React.Component{



	state = {
		data: [
			{
				id:1,
				name:"Create A Post",
				active:true,
				key:1
			},
			{
				id:2,
				name:"Photo Post",
				active:false,
				key:2
			}
		],
		currentActive:1
	};


	handleMenuItemClick = (item) => {
		this.setState({currentActive:item})
	}

	render(){
		let MenuItems;
		const { data,currentActive } = this.state;

		MenuItems = data.map((item) => {
			return(
				<ActionsList menu={item.name} key={item.key} content={item.name} active={item.id === currentActive ? true : false} onClick={this.handleMenuItemClick.bind(null, item.id)}/>
			);
		});		

		return (
			<Menu pointing>
				{MenuItems}
			</Menu>
		);
	}

}

export default PostTypesContainer;