import React, { Component } from 'react';
import {connect} from 'react-redux';
import {updatecartitems} from '../../../actions/actionapi';
import Cookies from 'universal-cookie';
const cookies =new Cookies();
 
//const cookies = new Cookies(req.headers.cookie);

class Moblie extends Component {
    
    render() {

        const value =this.props.productpageReducer.data;
        
       // console.log(value)
        if(value) {    
            var photodata = value.map((e)=> {
                return(
                    <div id='postdatadiv' key={e.id}>
                        <div className='imageDiv'>
                            <img  src={e.imageURL}></img><br></br>
                        </div>
                        <span>{e.productName}</span><br></br>
                        <button className='addcartbtn' id={e.id}  onClick={()=>addcart(e.id)}>Add to Cart</button>
                    </div>
                )
            })
        }
        const addcart=(e)=> {
            if(localStorage.getItem('GustUser')) {
                const {updatecartitems}=this.props;
                updatecartitems(e);
                document.getElementById(e).disabled = true;
                console.log('cookies',cookies.get('Gust'))
            } else {
                alert('please Login')
            }
            
        }
        return (
            <div className='flex-container'>
                {photodata}
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
export default connect(mapStateToProps ,mapDispatchToProps() )(Moblie)  ;