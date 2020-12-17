import React, { PureComponent } from 'react'
import Modal from 'react-modal';
import {Nav, Navbar, Button} from 'react-bootstrap';
import Cookies from 'universal-cookie';
const cookies=new Cookies();
const logedUsers = [];
export default class LoginComponent extends PureComponent {
    constructor(props){
        super(props);
        this.state={
            login:false,
            modal1Open:false,
            modal2Open:false,
            logusername:'',
            logpassword:'',
            newUser:'',
            newEmail:'',
            newPass:'',
            loginCondition:false,

        }
    }
    loginclick=() => {
        this.setState(prevstate=>({
            login:!prevstate.login,
            modal1Open:!prevstate.login,
            loginCondition:!prevstate.loginCondition,
        }));
        
            this.setState({logusername:'',logpassword:''});
    }
    Loginsubmit=() => {
        if(this.state.logusername && this.state.logpassword) {
            const userdetail ={'userName':this.state.logusername,'pasword':this.state.logpassword}
            const acountHolder =JSON.parse(localStorage.getItem('UserDetails'));
            if(acountHolder === null) {
                alert('Please create an Account');
                this.setState({login:false,logusername:''})
            } else {
                var varified = acountHolder.findIndex(e=> {
                    return e.Username ===userdetail.userName && e.Password === userdetail.pasword
                 })
                 if(varified>=0) {   
                     this.setState({loginCondition:true})
                     localStorage.setItem('GustUser',JSON.stringify(userdetail))
                     cookies.set('Gust',userdetail,{ path: '/mens' },)
                 } else {
                     this.setState({loginCondition:false})
                     alert('incurrect input');
                     this.setState({logusername:''})
                 }
     
             }
        }
            
        this.setState({modal1Open:false})
    }
    accountSubmit=()=>{
            const acountDetail = {'Username': this.state.newUser,
                                   'Password': this.state.newPass,
                                    'Email':this.state.newEmail };
            const acountHolder =localStorage.getItem('UserDetails');
            let account;
            if(acountHolder===null) {
                account=[]
            } else {
                account=JSON.parse(acountHolder);
            }
            account.push(acountDetail);
            localStorage.setItem('UserDetails',JSON.stringify(account));
            logedUsers.push({
                'name':this.state.newUser,
                'email':this.state.newEmail,
                'password':this.state.newPass
            })
            const gustAccount = {'Username': this.state.newUser,'Password': this.state.newPass,}
            localStorage.setItem('GustUser',JSON.stringify(gustAccount))
            this.setState({modal1Open:false,modal2Open:false,logusername:this.state.newUser})
    }
    render() {
        const {modal1Open, modal2Open} =this.state;
        if(this.state.login === false) {
            localStorage.removeItem('GustUser');
        }
        //const UserDetails =localStorage.getItem('UserDetails');
        const {loginCondition,logedUsers,login}=this.state;
       // console.log(logedUsers)
        return (
            <>
                <span id='greeting'><strong>Welcome {this.state.logusername}</strong></span>
                    <Button onClick={this.loginclick.bind(this)}>{loginCondition && login? 'log out' :'log in'}</Button>
                    <Modal id='modalComponant1' isOpen={modal1Open} onRequestClose={()=>this.setState({modal1Open:false})}>
                        <h2>Sign in</h2>
                        <input
                            value={this.state.logusername} 
                            onChange={(e)=>this.setState({logusername:e.target.value})}
                            placeholder="Username" 
                        ></input>
                         <input
                            value={this.state.logpassword} 
                            onChange={(e)=>this.setState({logpassword:e.target.value})}
                            placeholder="Password" 
                            type='password'
                        ></input>
                        <button onClick={this.Loginsubmit.bind(this)}>Log In</button> <button onClick={()=>this.setState({modal1Open:false,login:false})}>Cencel</button>
                        <br></br><span onClick={()=>this.setState({modal2Open:true})}>Create Account</span>
                        <Modal id='modalComponent2' isOpen={modal2Open} onRequestClose={()=>this.setState({modal2Open:false})}>
                            
                                <div className="form-group">
                                    <label for="nameImput">Name</label>
                                    <input type="text" name="name" value={this.state.newUser} onChange={(e)=>this.setState({newUser:e.target.value})} className="form-control" id="nameImput" placeholder="Name" />
                                </div>
                                <div className="form-group">
                                    <label for="emailImput">Name</label>
                                    <input name="email" type="email" value={this.state.newEmail} onChange={(e)=>this.setState({newEmail:e.target.value})} className="form-control" id="emailImput" placeholder="email@domain.com" />
                                </div><div className="form-group">
                                    <label for="passwordInput">Password</label>
                                    <input name="password" type="password" value={this.state.newPass} onChange={(e)=>this.setState({newPass:e.target.value})} className="form-control" id="passImput" placeholder="password" />
                                </div>
                                
                                <button onClick={this.accountSubmit.bind(this)} value='submit' className="btn btn-primary">submit</button>
                            
                        </Modal>
                    </Modal> 
            </>
        )
    }
}
