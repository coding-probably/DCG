import { NavLink } from 'react-router-dom'
import './SignIn.css'




const SignIn = () => {



    return (


        <>
            <div class="auth-container">
                <div class="auth-card">
                    <div class="auth-header">
                        <div class="logo-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M3 6h18"></path>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <path d="M10 11v6"></path>
                                <path d="M14 11v6"></path>
                            </svg>
                        </div>
                        <h2>SmartWaste Login</h2>
                    </div>
                    <div class="auth-body">
                        <form id="loginForm">
                            <div class="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" class="form-control" placeholder="Enter your email" />
                                <div class="error-message" id="emailError">Please enter a valid email address</div>
                            </div>
                            <div class="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" class="form-control" placeholder="Enter your password" />
                                <div class="error-message" id="passwordError">Password is required</div>
                            </div>
                            <div class="remember-forgot">
                                <div class="remember-me">
                                    <input type="checkbox" id="remember" />
                                    <label htmlFor="remember">Remember me</label>
                                </div>
                                <a href="#" class="forgot-password">Forgot Password?</a>
                            </div>
                            <button type="submit" class="btn btn-primary">Login</button>

                            <div class="social-login">
                                <p>Or login with</p>
                                <div class="social-buttons">
                                    <div class="social-btn">
                                        <i class="fab fa-google"></i>
                                    </div>
                                    <div class="social-btn">
                                        <i class="fab fa-microsoft"></i>
                                    </div>
                                    <div class="social-btn">
                                        <i class="fab fa-apple"></i>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="auth-footer">
                        <NavLink to="/registration">
                        <p>Don't have an account? <a>Register</a></p>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}


export default SignIn