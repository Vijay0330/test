import React, { Component } from 'react';
import {Navbar, Nav } from 'react-bootstrap';
import LoginComponent from './loginComponent';
import {connect} from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Redirect,
    Prompt,
  } from "react-router-dom";
import Search from './searchComponent';
class HeadNavbar extends Component {
    render() {
        const cartid=this.props.cartpageReducer.cartdata;
        console.log('cartId',cartid.length)
        return (
            <>
                <Navbar collapseOnSelect expand="lg"     variant="dark">
                    <Navbar.Brand><Nav.Link ><NavLink className="title" exact to="/" >SHOPPING CART</NavLink></Nav.Link></Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link ><NavLink exact to="/mobiles" className="main-nav" activeClassName='main-nav-active'>Mobiles</NavLink></Nav.Link>
                        <Nav.Link ><NavLink exact to="/mens" className='main-nav' activeClassName='main-nav-active'>Mens</NavLink></Nav.Link>
                        <Nav.Link ><NavLink exact to="/womens" className='main-nav' activeClassName='main-nav-active'>Womens</NavLink></Nav.Link>
                        <Nav.Link id='cartNav'><NavLink exact to="/cart" className='main-nav' activeClassName='main-nav-active'>Cart</NavLink></Nav.Link><span className='cartCount'>{cartid.length}</span>
                        <Search />
                    </Nav>
                    <LoginComponent />
                </Navbar>
            </>
        )
    }
}
const mapStateToProps =(state) => {
    return {...state} 
}
export default connect(mapStateToProps)(HeadNavbar) ;