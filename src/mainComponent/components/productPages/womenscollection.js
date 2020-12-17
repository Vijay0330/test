import React, { Component } from 'react';
import {connect} from 'react-redux';
import {updatecartitems} from '../../../actions/actionapi' ;

class Womens extends Component {
    render() {
        const value =this.props.womenpageReducer.womencollection;
        // console.log(value)
         if(value) {    
             var womansdata = value.map((e)=> {
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
                const {fetchedData}=this.props;
                fetchedData(updatecartitems(e));
                document.getElementById(e).disabled = true;
            } else {
                alert('please Login')
            }
         }
        return (
            <div className='flex-container'>
               {womansdata}
            </div>
        )
    }
}
const mapStateToProps =(state) => {
    return {...state} 
}
const mapDispatchToProps =(dispatch) =>{
    return {
        fetchedData:(dispatchobj)=> dispatch({...dispatchobj})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Womens) ;