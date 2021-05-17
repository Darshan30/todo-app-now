
import React, { Component } from 'react';
import AuthenticationService from './AuthenticationService';
import './Login.css';



class Login extends Component {


    state = {

        username: 'Darshan',
        password: '',
        loginSuccess: null,
        showError: null

    }

    handlerUsername = (event) => {

        this.setState({
            username: event.target.value

        })

    }

    handlerPassword = (event) => {

        this.setState({
            password: event.target.value

        })

    }

    handlerLogin = () => {

        if ((this.state.username === 'Darshan') && (this.state.password === '2darshan')) {

            AuthenticationService.registerSucessfulLogin(this.state.username, this.state.password);

            this.props.history.push(`/welcome/${this.state.username}`)
            this.setState({ loginSuccess: true })
            this.setState({ showError: false })
        }
        else {

            this.setState({ loginSuccess: false })
            this.setState({ showError: true })



        }
    }



    render() {

        //const check=this.state.loginSuccess===true?<div>logged</div>:<div>nope</div>




        return (

            
            <div className="parent"  >

               
                <div className="container" >
                    <label ><b>Username</b></label>
                    <input type="text"
                     className="text_123"
                        placeholder="Enter Username"

                        value={this.state.username}
                        onChange={this.handlerUsername}
                        required 
                       />

                    <label ><b>Password</b></label>
                    <input type="password"
                     className="pass_123"
                        placeholder="Enter Password"

                        value={this.state.password}
                        onChange={this.handlerPassword}
                       
                        required />

                    <button onClick={this.handlerLogin} style={{marginTop:"50px",borderRadius:"100px"}}>Login</button>

                    {this.state.showError && <div className="alert alert-danger text-center" style={{marginTop:"5px"}}>Invalid username or password </div>}


                </div>

               

                
            </div>


        );
    }
}


export default Login;