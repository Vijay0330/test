import React, { Component } from 'react';
import HeadNavbar from './headNav';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import Mobile from './productPages/mobileCollection';
import Mens from './productPages/menscollection';
import Womens from './productPages/womenscollection';
import Cart from './productPages/cartpage';
import Home from './productPages/homePage';
class BodyComponent extends Component {
    render() {
        return (
            <Router>
                <HeadNavbar />
                <Switch>
                    <Route exact path='/' render={()=> <Home />} />
                    <Route exact path='/mobiles' render={()=><Mobile />} />
                    <Route exact path='/mens' render={()=> <Mens />} />
                    <Route exact path='/womens' render={()=> <Womens />} />
                    <Route exact path='/cart' render={()=> <Cart />} />
                    <Route exact path='/error' render={()=><h1>404 Page Not Found</h1>} />
                    
                </Switch>

            </Router>
            
        )
    }
}

export default BodyComponent; 