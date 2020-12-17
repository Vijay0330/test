import React, { Component } from 'react'
import {withRouter, Redirect} from 'react-router-dom';
//import {FaThumbsUp} from 'react-bootstrap'
//import { FaThumbsUp } from 'react-icons/fa';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state ={
            value:'',
        }
    }
    click =()=>{
        const inputValue = this.state.value.toLocaleLowerCase()
        if(inputValue.startsWith('mobil') || inputValue.startsWith('vivo')  )  {
            return(this.props.history.push("/mobiles"))
        } else if(inputValue.startsWith('men',) || inputValue.startsWith('shir')) {
            return(this.props.history.push("/mens"))
        } else if(inputValue.startsWith('wom') || inputValue.startsWith('girl')) {
            return(this.props.history.push("/womens"))
        } else if (this.state.value ==='') {
            return(this.props.history.push("/"))
        }
        else {
            return(this.props.history.push("/error"))
        }
    }
    uniKeyCode=(event)=> {
        var key =event.keyCode;
        if(key ===13){
            this.click();
        }
    }
    render() {
       
        
        return (
            <div id='searchComponent' className="form-group">
                <input id='searchinput' value={this.state.value} onKeyDown={(e)=>this.uniKeyCode(e)} onChange={(e)=>this.setState({value:e.target.value})} type="text" name="name"  className="form-control"  placeholder="Search" />
                <button  onClick={this.click.bind(this)}>Search</button>
            </div>
        )
    }
}
export default withRouter(Search);