
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/Login.jpg";
import "./Login.css";
import {useState} from "react";



function Login() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");
   const [success, setSuccess] = useState("");

   const navigate = useNavigate();

   function handleSubmit(event) {
        event.preventDefault();
        setError("");
        setSuccess("");

        if ( !email.trim() || !password) {
            setError("Please fill in all fields.");
            return;

        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Please enter a valid email.");
            return;
        }

        if(password.length < 8){
            setError("Password must be at least 8 characters.")
            return;
        }

        

        

       navigate("/dashboard");

    }

  return (
    <div className="container-fluid p-0 login-page">
      <div className="row g-0 min-vh-100">

        
        <div className="col-lg-5 d-none d-sm-flex login-image">
          <img src={logo} alt="ISSNC Logo" />
        </div>

        <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center p-3 p-md-4 login-form-side">
          <div className="w-100 login-form">

            <Link to="/" className="btn back-btn mb-4">
              <i className="bi bi-arrow-left me-2"></i>
              Back
            </Link>

            <h2 className="mb-2">Welcome Back</h2>

            <p className="login-subtitle mb-4">
              Log in to access your city management dashboard
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Authority Email
                </label>

                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                {error && (
                 <p className="text-danger" role="alert">
                 {error}
                 </p>
                )}

                {success && (
                  <p className="text-success" role="status">
                    {success}
                  </p>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>

                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                {error && (
                 <p className="text-danger" role="alert">
                 {error}
                 </p>
                )}

                {success && (
                  <p className="text-success" role="status">
                    {success}
                  </p>
                )}
              </div>

              <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-4">
                <div className="form-check">
                  <input
                    type="checkbox"
                    id="remember"
                    className="form-check-input"
                  />

                  <label
                    htmlFor="remember"
                    className="form-check-label"
                  >
                    Remember me
                  </label>
                </div>

                <Link
                  to="/forgot-password"
                  className="forgot-password-link"
                >
                  Forgot password?
                </Link>
              </div>

              <button type="submit" className="btn login-btn w-100">
                Log In
              </button>
            </form>

            <p className="signup-link text-center mt-4 mb-0">
              Don't have an account?{" "}
              <Link to="/signup">Sign Up</Link>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;