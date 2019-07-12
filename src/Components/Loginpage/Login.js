import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Login.css';

class LoginPage extends Component {
    constructor(){
        super();
        this.state ={
            loginPageData : null,
            username:null,
            password:null,
            usernameError:"",
            passwordError:"",
        }
    }

    componentWillMount = () => {
        this.setState({loginPageData:this.props.loginData})
    }
    changeHandler = (e) => {
        this.setState({[e.target.name]:e.target.value}, ()=>{ this.loginValidation()
        })
    }

    loginValidation = () => {
        let usernameError="";
        let passwordError=""

        if(!this.state.username){
            usernameError="username should not be blank"
        }

        if(!this.state.password) {
            passwordError="password should be minimum 5 charaters"
        }

        if (usernameError || passwordError) {
            this.setState({ usernameError, passwordError });
            return false;
          }

              return true;
    }

    LoginHandler = () => {
        const { loginPageData, username, password } = this.state;
        let isValid = this.loginValidation()
        if(isValid){
        let filterLoginData = loginPageData.find((user, i) => {
            if (username === user.username && password === user.password) {
                return user
            }
        })
        {filterLoginData ? this.props.history.push('/dashboard') : alert("enter valid mail id n password")}

    }
}
    

    render() {
        return (
            <div className="loginPage"> 
            <div className="login-form">
                <div className="login-wrapper">
                    <input
                        name="username"
                        className="input-Wrapper"
                        type="text"
                        placeholder="username" 
                        onChange={this.changeHandler}/>
                        <div className="error-msg">{this.state.usernameError}</div>

                </div>
                <div className="login-wrapper">
                    <input
                        name="password"
                        className="password"
                        className="input-Wrapper"
                        type="password"
                        placeholder="password" 
                        onChange={this.changeHandler}
                        />
                        <div className="error-msg">{this.state.passwordError}</div>
                </div>
                <div className="button-wrapper">
                    <button onClick={this.LoginHandler} className="login-btn">Login</button>
                </div>
                </div>
                </div>
        )
    }
}

 const mapStateToProps = (state) => {
    return {
    loginData: state.LoginpageData
    }

}
export default connect(mapStateToProps)(LoginPage);