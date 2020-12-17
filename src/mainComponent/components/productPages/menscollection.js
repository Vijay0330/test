import React, { Component } from 'react';
import {connect} from 'react-redux';
import {updatecartitems} from '../../../actions/actionapi' ;

class Mens extends Component {
    render() {
        const value =this.props.menspageReducer.menstshirtdata;
         if(value) {    
             var mansdata = value.map((e)=> {
                 return(
                     <div id='postdatadiv' key={e.id}>
                         <div className='imageDiv'>
                            <img  src={e.imageURL}></img>
                         </div>
                         <br></br>
                         <span>{e.productName}</span><br></br>
                         <button className='addcartbtn' id={e.id} onClick={()=>addcart(e.id)}>Add to Cart</button>
                     </div>
                 )
             })
         }
         const addcart=(e)=> {
             if(localStorage.getItem('GustUser')) {
                const {updatecartitems}=this.props;
                updatecartitems(e);
                document.getElementById(e).disabled = true;
            } else {
                alert('please Login')
            }
         }
        return (
            <div className='flex-container'>
               {mansdata}
            </div>
        )
    }
}
const mapStateToProps =(state) => {
    return {...state} 
}
const mapDispatchToProps =() =>{
    return {
        updatecartitems
    }
}
export default connect(mapStateToProps, mapDispatchToProps())(Mens) ;