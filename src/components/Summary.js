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
        return(
                <div className="collection">
                    <li className="collection-item"><b>Price details</b></li>
                    <li className="collection-item">
                        <p><b>Price: {this.props.total}$</b>&nbsp;&nbsp;&nbsp;&nbsp;</p><br/>
                        <p><b>Discount: {discountTotal}$</b></p>
                    </li>
                    <li className="collection-item">
                        <b>Total: {netAmount}$</b>
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