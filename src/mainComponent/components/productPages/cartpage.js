import React, { Component } from 'react';
import {connect} from 'react-redux';
import {removecartitems} from '../../../actions/actionapi'

class Cart extends Component {
    
    render() {
        const cartid=this.props.cartpageReducer.cartdata;
        const mobiledetail = this.props.productpageReducer.data;
        const mensItems = this.props.menspageReducer.menstshirtdata;
        const womensItems = this.props.womenpageReducer.womencollection;
        var productDetails = mobiledetail.concat(mensItems);
        productDetails=productDetails.concat(womensItems);
        var cartItems=[];
        if(cartid.length === 0 || cartid === undefined){
            cartItems.push(
                <h2 key='1'>Cart is emty</h2>
            )
        } else {
            cartid.map(e=>{
                productDetails.map(p=>{
                    if(e=== p.id) {
                        cartItems.push(
                            <div id='postdatadiv' key={p.id}>
                               <div  className='imageDiv'>
                                    <img  src={p.imageURL}></img>
                                </div><br></br>
                                <span>{p.productName}</span><br></br>
                                <button className='addcartbtn' onClick={()=>remove(p.id)}>Remove</button>
                            </div>
                        )
                    }
                })
            })
        }
        if(!localStorage.getItem('GustUser')) {
            cartItems.splice(0,cartItems.length,<h2>Cart is emty</h2>)
        }
        const remove =(id)=> {
                const {removecartitems} = this.props;
                removecartitems(id)
        }
        return (
            <div className='flex-container'>
                {cartItems}
            </div>
         )

    }
        
    
}
const mapStateToProps =(state) => {
    return {...state} 
}
const mapDispatchToProps =() =>{
    return {
        
        removecartitems,
    }
}
export default connect(mapStateToProps ,mapDispatchToProps() )(Cart)  ;