import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart, getItems, sortItems, filteredItems } from './actions/cartAction'
import HomeSummary from './HomeSummary';
import { Link , CircularProgress, Slider, Typography } from '@material-ui/core';

const axios = require('axios');

var that;

 class Home extends Component{

    //Add item to Cart
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    componentDidMount () {
        that = this;
 
        // Make a request for a user with a given ID
        axios.get('https://api.myjson.com/bins/qzuzi')
        .then(function (response) {
            // handle success
            that.manipulateItems(response.data);
            // that.props.getItems(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
    }

    manipulateItems = (data) => {
        data.map((item) => {
            item.discountPrice = (item.price/100)*item.discount;
            item.newPrice = item.price - item.discountPrice;
        })

        this.props.getItems(data);
    }

    handleSort = (type) => {
        if(type === "asc") {
            this.props.items.sort((a, b) => (a.price < b.price) ? 1 : -1)
        } else if(type === "dsc") {
            this.props.items.sort((a, b) => (a.price > b.price) ? 1 : -1)
        } else {
            this.props.items.sort((a, b) => (a.discount < b.discount) ? 1 : -1)
        }
        this.props.sortItems(type, this.props.items);
    }

    handleChange = (event, newValue) => {
        this.setState({value: newValue});
    };

    render(){
        let itemList;

        if(this.props.items.length) {
            const { items } = this.props;

            // let filteredItems = items.filter((item) => {
            //     if(item.price < newValue[1] && item.price > newValue[0] ) {
            //         return item;
            //     }
            // });
            
            itemList = items.map(item=>{

                let quantity = "0";
                this.props.addedItems.map(addedItem => {
                    if(item.id === addedItem.id) {
                        quantity = addedItem.quantity;
                    }
                });
                return(
                    <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img_url} alt={item.name}/>
                            <span className="card-title">{item.name}</span>
                        </div>

                        <div className="card-content">
                            <p><b>Price: {item.newPrice}$</b></p>
                            <p><b>{item.price} </b></p>
                            <p><b>{item.discount} % Off </b></p>
                        </div>

                        <div className="card-action">
                            <div className="price-det">
                                <b>Quantity: {quantity}</b>
                            </div>
                            <div className="add-btn">
                                <button className="waves-effect waves-light btn red" 
                                    onClick={()=>{this.handleClick(item.id)}}>
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })
        } else {
            itemList = <div className="loader-class"><CircularProgress /></div>
        }

        return(
            <div className="container">
                <div>
                    {/* <h4 className="header-title">Adobe Products</h4> */}
                    <HomeSummary/>
                
                    <div className="sort-box">
                        <Typography id="sort-by" gutterBottom>
                            Sort By
                        </Typography>
                        <Link color="primary" underline="hover" onClick={() => this.handleSort("asc")}>
                            Price -- High To Low
                        </Link>
                        <Link color="primary" underline="hover" onClick={() => this.handleSort("dsc")}>
                            Price -- Low To High
                        </Link>
                        <Link color="primary" underline="hover" onClick={() => this.handleSort("dcn")}>
                            Discount
                        </Link>
                    </div>
                </div>
                <div className="box">
                    {/* Render item in a box */}
                    {itemList}
                </div>
            </div>
        )
    }
}

//Get the items from redux store
const mapStateToProps = (state)=>{
    return {
      items: state.items,
      addedItems: state.addedItems,
      total: state.total,
      sortType: state.sortType,
      newValue: state.newValue
    }
  }

//Add the dispatchers to events which will connect to redux later  
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))},
        getItems: (payload) => {dispatch(getItems(payload))},
        sortItems: (type, payload) => {dispatch(sortItems(type, payload))},
        filteredItems: (newValue, payload) => {dispatch(filteredItems(newValue, payload))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)