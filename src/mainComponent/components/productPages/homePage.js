import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter, Redirect} from 'react-router-dom';

class Home extends Component {
    render() {
        const value =this.props.mainReducer.homeData;
        console.log('maindata',value)
         if(value) {    
             var mainContant = value.map((e)=> {
                 return(
                     <div id='postdatadiv' key={e.id} style={{cursor:"pointer"}} onClick={()=>redirect(e.productName)}>
                         <h2>{e.productName}</h2>
                         <div className='imageDiv'>
                            <img  src={e.imageURL}></img>
                         </div>
                         <br></br>
                     </div>
                 )
             })
         }
         const redirect =(value)=> {
             if(value==='Mobiles') {
                return(this.props.history.push("/mobiles"))
             } else if(value==='Mens Collection') {
                return(this.props.history.push("/mens"))
             } else if(value==='Womens Collection') {
                return(this.props.history.push("/womens"))
             }

         }
        
        return (
            <div className='flex-container'>
               {mainContant}
            </div>
        )
    }
}
const mapStateToProps =(state) => {
    console.log('mainpage',state)
    return {...state}   
}

export default withRouter(connect(mapStateToProps)(Home)) ;