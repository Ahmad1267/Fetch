import React from 'react'
import { Link } from 'react-router'
import "./Login.css"
import { useNavigate } from 'react-router';
export default function Login() {
      const navigate = useNavigate();

  return (
    <div className="login-page">

      <div className="login-card">

        {/* Left Side */}
        <div className="login-left">
          <h1>Welcome Back!</h1>
          <p>
            Login to your account and continue your journey with us.
          </p>
        </div>

        {/* Right Side */}
        <div className="login-right">


          <h2>Login</h2>
          <p className="login-subtitle">
            Please enter your details
          </p>

          <form>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>

            {/* Remember + Forgot */}
            <div className="form-options">

              <label className="remember">
                <input type="checkbox" />
                Remember me
              </label>

              <a href="#" className="forgot-password">
                Forgot Password?
              </a>

            </div>

            {/* Login Button */}
            <button type="submit" className="login-btn">
              Login
            </button>

          </form>

          {/* Register */}
          <p className="register">
            Don't have an account?
            <a href="#"> Create Account</a>
          </p>
        </div>
<Link to="/">
        Back to Home
      </Link>
      <Link to="/About">
        Back to About
      </Link>
      <Link to="/product">
        Back to Product
      </Link>
      </div>
    </div>


  )
}
