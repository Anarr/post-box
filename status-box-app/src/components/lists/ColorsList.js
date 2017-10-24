import React from 'react';
import '../../styles/app.css';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { selectColor } from '../../actions/color-actions';


class ColorsList extends React.Component{

    createColorListItems(){
        let style = {};
        return this.props.colors.map((color) => {

            if(this.props.currentId == color.id){
                style={
                    border:"2px solid white",
                    backgroundColor:this.props.current_color,
                    color:"white"
                }
            }else{
                style={};
            }

            return(
                <li  key={color.id} style={style}  onClick={()=>this.props.selectColor(color)}></li>
            );
        });
    }
    render(){
        return (
            <div className="colorsList">
                <ul>
                    {this.createColorListItems()}
                </ul>  
            </div>
        );
    }
}


function mapStateToProps(state){
    return {
        colors:state.colors
    }
}

function matchDisptachToProps(dispatch){
    return bindActionCreators({selectColor:selectColor}, dispatch);
}

export default connect(mapStateToProps, matchDisptachToProps)(ColorsList);