import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Slider } from '@material-ui/core';
import { filteredItems } from './actions/cartAction'


class Sidebar extends Component{

    constructor(props) {
        super(props);

        this.state = {
            value: [100, 750]
        }
    }
    
    handleChange = (event, newValue) => {
        this.setState({value: newValue});
    };

    handleApply = () => {
        let newValue = this.state.value;

        let {items} = this.props;
        let toBeFilterd = (this.props.originalItems && this.props.originalItems.length > 0) ? this.props.originalItems : this.props.items;
        let filteredItems = toBeFilterd.filter((item) => {
            if(item.price < newValue[1] && item.price > newValue[0] ) {
                return item;
            }
        });

        this.props.filteredItems(newValue, filteredItems, toBeFilterd);
    }

    render(){

        let min, max, marks;
        if(this.props.items.length) {
            // min = this.props.items.reduce((min, b) => Math.min(min, b.price), this.props.items[0].price);
            // max = this.props.items.reduce((max, b) => Math.max(max, b.price), this.props.items[0].price);
            min = this.state.value[0];
            max = this.state.value[1];
            marks = [{"value": min, "label": min }, {"value": max, "label": max } ]
        }


        return(
            <div>
                <Slider
                    min = {100}
                    max = {750}
                    value={this.state.value}
                    onChange={this.handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    marks={marks}
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
        originalItems: state.originalItems
    }
}

//Add the dispatchers to events which will connect to redux later  
const mapDispatchToProps= (dispatch)=>{
    return{
        filteredItems: (newValue, payload, originalItems) => {dispatch(filteredItems(newValue, payload, originalItems))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
