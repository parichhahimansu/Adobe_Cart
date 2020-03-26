import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { Slider } from '@material-ui/core';
import { filteredItems } from './actions/cartAction'


class Sidebar extends Component{

    constructor(props) {
        super(props);

        this.state = {
            value: [150, 700]
        }
    }
    
    handleChange = (event, newValue) => {
        this.setState({value: newValue});
    };

    handleApply = () => {
        let newValue = this.state.value;

        let {items} = this.props;
        let filteredItems = items.filter((item) => {
            if(item.price < newValue[1] && item.price > newValue[0] ) {
                return item;
            }
        });

        this.props.filteredItems(newValue, filteredItems);
    }

    render(){

        let min, max;
        if(this.props.items.length) {
            min = this.props.items.reduce((min, b) => Math.min(min, b.price), this.props.items[0].price);
            max = this.props.items.reduce((max, b) => Math.max(max, b.price), this.props.items[0].price);
        }

        return(
            <div>
                <Slider
                    min = {min}
                    max = {max}
                    value={this.state.value}
                    onChange={this.handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                />

            <div className="apply-btn">
                <button className="waves-effect waves-light btn blue" 
                    onClick={()=>{this.handleApply()}}>
                    Apply
                </button>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.items,
    }
}

//Add the dispatchers to events which will connect to redux later  
const mapDispatchToProps= (dispatch)=>{
    
    return{
        filteredItems: (newValue, payload) => {dispatch(filteredItems(newValue, payload))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)