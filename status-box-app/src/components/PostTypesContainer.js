import React from 'react';
import { Menu } from 'semantic-ui-react';

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
				name:"Home",
				active:false,
				key:2
			}
		],
		currentActive:1
	};

	handleItemClick = (element) => {
		
		this.setState({currentActive:element});
		console.log(this.state.currentActive);

	}

	render(){
		let MenuItems;
		const { data,currentActive } = this.state;
		console.log(data);

		MenuItems = data.map((item) => {
			return(
				<Menu.Item name={item.name} key={item.key} content={item.name} active={ item.id == currentActive ? true : false } onClick={this.handleItemClick.bind(null,item.id)}/>
			);
		});

		return (
			<Menu>
				{MenuItems}
			</Menu>
		);
	}

}

export default PostTypesContainer;