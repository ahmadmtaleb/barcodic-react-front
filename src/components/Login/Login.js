import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    state = {
        email: '',
        password: '',
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onPasswordChange(event) {
        this.setState({ password: event.target.value })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        try 
        {
            const response = await fetch(`http://127.0.0.1:8000/api/login/?email=${this.state.email}&password=${this.state.password}`, {
                method: 'POST'
            });

            const result = await response.json();
            if (result.success) 
            {
                console.log("done")
                localStorage.setItem('token', result.token)
                this.props.handleLogin()
                
            } 
            else 
            {
                console.log("error");
                alert("Incorrect email or password");
            }
        } 
        catch (err) 
        {
            console.log('err', err)
            alert("Incorrect email or password");
        } 
    }

    render() {
        return (
            <form className="login_form_ah" action='' method='POST' onSubmit={this.handleSubmit}>

                <label className="login_item_ah"><div className="login_item_text_ah">Email<br /></div>
                    <input type="mail" name="username" placeholder="Email" onChange={this.onEmailChange.bind(this)} required />
                </label>

                <label className="login_item_ah"><div className="login_item_text_ah">Password<br /></div>
                    <input type="password" name="password" placeholder="Password" onChange={this.onPasswordChange.bind(this)} required />
                </label>
                <label className="login_item_ah" id="login_btn_ah">
                    <button type="submit" id="login_btn_self_ah">Log In</button>
                </label>
            </form>

        );
    }
}
export default Login;