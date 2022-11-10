import React, { Component } from "react";
import './login.style.css';

export default class Login extends Component{
    state = {isShown:true}
    hideForm(){
        this.setState({isShown:false});
    }

    render(){
        return(
            <div className="ele-1">
                <div className="ele-2" style={{display: this.state.isShown ? 'flex' : 'none'}}>
                    <div className="part-1">
                        <h2>Login</h2>
                        <p>Get access to your Orders,Wishlist and Recommendation.</p>
                    </div>
                    <div className="part-2">
                        <form>
                            <div className="form-1">
                                <label for="email" hidden>Enter email/Mobile Number</label><br />
                                    <input
                                        type="email"
                                        id="email"
                                        name = "email"
                                        pattern="[A-Za-z\._]+@publicisgroupe.net$"
                                        placeholder="Enter email/Mobile Number"
                                    />
                            </div>
                            <div class="form-2">
                                    <input
                                        type="password"
                                        id="password"
                                        name = "password"
                                        placeholder="Password"
                                        required
                                    />
                                    <a href="https://www.flipkart.com/" className="forgot-password">Forgot?</a>
                            </div>
                            <span className="login-span">by continuing ,you agree to pubCart's <a href="https://www.flipkart.com/">terms of use</a> and <a href="https://www.flipkart.com/">privacy policy</a></span><br />
                            <button className="login">Login</button><br />
                            <span>OR</span><br />
                            <button className="signup">Request OTP</button>
                        </form>
                        <a href="https://www.flipkart.com/">New to pubCart?Create an account</a>
                    </div>
                    <span className="dialog__close" onClick={()=>this.hideForm()}></span>
                </div>
            </div>
        )
    }
}