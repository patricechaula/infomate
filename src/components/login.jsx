import React, {Component} from 'react';
import "./login.css";
import {connect} from "react-redux";
import * as actions from '../store/actions/auth';
import 'bootstrap/dist/css/bootstrap.css';

class ILogin extends Component {

    submitData = (e) => {
        e.preventDefault();
        this.props.onAuth(document.querySelector('#reg_number').value,
            document.querySelector('#password'
            ).value);
        this.props.history.push('/');

    }

    render() {

        let errorMessage = null;

        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }
        return (
            <div>
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <form className="login100-form validate-form">
					<span className="login100-form-title p-b-26">
						Welcome
					</span>
                            <span className="login100-form-title p-b-48">
						<i className="zmdi zmdi-font"></i>
					</span>

                            <div className="wrap-input100 validate-input" data-validate="Valid email is: a@b.c">
                                <input className="input100" type="text" name="email"/>
                                    <span className="focus-input100" data-placeholder="Email"></span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Enter password">
						<span className="btn-show-pass">
							<i className="zmdi zmdi-eye"></i>
						</span>
                                <input className="input100" type="password" name="pass"/>
                                <span className="focus-input100" data-placeholder="Password"></span>
                            </div>

                            <div className="container-login100-form-btn">
                                <div className="wrap-login100-form-btn">
                                    <div className="login100-form-bgbtn"></div>
                                    <button className="login100-form-btn">
                                        Login
                                    </button>
                                </div>
                            </div>

                            <div className="text-center p-t-115">
						<span className="txt1">
							Don’t have an account?
						</span>

                                <a className="txt2" href="#">
                                    Sign Up
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        <div id="dropDownSelect1"></div>

            </div>
    );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ILogin);