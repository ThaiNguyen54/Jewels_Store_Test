import React from "react";
import {Link} from 'react-router-dom';
import '../style/LoginStyle/css/main.css'
import '../style/LoginStyle/css/util.css'
import '../style/LoginStyle/vendor/bootstrap/css/bootstrap.min.css'
import '../style/LoginStyle/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import  '../style/LoginStyle/vendor/animate/animate.css'
import '../style/LoginStyle/vendor/css-hamburgers/hamburgers.min.css'
import '../style/LoginStyle/vendor/select2/select2.min.css'
function Login() {
    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <div className="login100-pic js-tilt" data-tilt>
                        <img src="images/img-01.png" alt="IMG"/>
                    </div>

                    <form className="login100-form validate-form">
					<span className="login100-form-title">
						Member Login
					</span>

                        <div className="wrap-input100 validate-input"
                             data-validate="Valid email is required: ex@abc.xyz">
                            <input className="input100" type="text" name="email" placeholder="Email"/>
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Password is required">
                            <input className="input100" type="password" name="pass" placeholder="Password"/>
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
							<i className="fa fa-lock" aria-hidden="true"></i>
						</span>
                        </div>

                        <div className="container-login100-form-btn">
                            <button className="login100-form-btn">
                                Login
                            </button>
                        </div>



                        <div className="text-center p-t-12">
						<span className="txt1">

						</span>
                            <a className="txt2" href="#">
                                Forgot Username / Password?
                            </a>
                        </div>

                        <div className="text-center p-t-136">
                            <a className="txt2" href="#">
                                Create your Account
                                <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                            </a>
                        </div>
                    </form>
                </div>
            </div>

            <script src="../style/LoginStyle/vendor/jquery/jquery-3.2.1.min"></script>
            <script src="../style/LoginStyle/vendor/bootstrap/js/popper.js"></script>

            <script src="../style/LoginStyle/vendor/bootstrap/js/bootstrap.min.js"></script>

            <script src="../style/LoginStyle/vendor/select2/select2.min.js"></script>

            <script src="../style/LoginStyle/vendor/tilt/tilt.jquery.min.js"></script>

            <script src="../style/LoginStyle/js/main.js"></script>

        </div>
    )
}
export default Login;