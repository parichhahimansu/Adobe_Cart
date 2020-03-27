import React, { Component } from 'react'
import { connect } from 'react-redux'

class Summary extends Component{
    
    
    render(){

        function amount(item){
            return item.discountPrice*(item.quantity ? item.quantity : 1);
        }
        
        function sum(prev, next){
            return prev + next;
        }
        
        let discountTotal = this.props.addedItems.map(amount).reduce(sum);
        let netAmount = this.props.total - discountTotal;
        let totalItems = this.props.addedItems.length;
        let totalString = totalItems > 1 ? `(${totalItems} Items)` : `(${totalItems} Item)`;
        return(
                <div className="collection">
                    <li className="collection-item"><b>Price details</b></li>
                    <li className="collection-item">
                        <b><span className="cart-det-item">Price {totalString}</span>: <span className="cart-det-price">{this.props.total}$</span></b></li>
                    <li className="collection-item">
                        <b><span className="cart-det-item">Discount</span>: <span className="cart-det-price">{discountTotal}$</span></b></li>
                    <li className="collection-item">
                        <b><span className="cart-det-item">Total</span>: <span className="cart-det-price">{netAmount}$</span></b>
                    </li>
                </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

export default connect(mapStateToProps)(Summary)