
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../images/Login.jpg";
import "./SignUp.css";

function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    setError("");
    setSuccess("");

    
    if (
      !fullName.trim() ||
      !email.trim() ||
      !password ||
      !confirmPassword
    ) {
      setError("Please fill in all fields.");
      return;
    }

    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email.");
      return;
    }

    
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

   
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

   
    if (!termsAccepted) {
      setError("Please accept the terms and conditions.");
      return;
    }

    setSuccess("Registration completed successfully!");
    setTimeout(() => {
    navigate("/login");
    }, 2000);
  }

  return (
    <div className="container-fluid p-0 signup-page">
      <div className="row g-0 min-vh-100">

        {/* Image Section */}
        <div className="col-lg-5 d-none d-sm-flex signup-image">
          <img src={logo} alt="ISSNC Logo" />
        </div>

        {/* Sign Up Form Section */}
        <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center p-3 p-md-4 signup-form-side">
          <div className="w-100 signup-form">

            <Link to="/" className="btn back-btn mb-3">
              <i className="bi bi-arrow-left me-2"></i>
              Back
            </Link>

            <h2 className="mb-2">Welcome</h2>

            <p className="signup-subtitle mb-3">
              Sign up to access your city management dashboard
            </p>

            <form onSubmit={handleSubmit}>

              {/* Full Name */}
              <div className="mb-2">
                <label htmlFor="fullName" className="form-label">
                  Full Name
                </label>

                <input
                  type="text"
                  id="fullName"
                  className="form-control"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(event) =>
                    setFullName(event.target.value)
                  }
                  required
                />
              </div>

             
              <div className="mb-2">
                <label htmlFor="email" className="form-label">
                  Authority Email
                </label>

                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  required
                />
              </div>

              <div className="mb-2">
                <label htmlFor="password" className="form-label">
                  Password
                </label>

                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) =>
                    setPassword(event.target.value)
                  }
                  required
                />
              </div>

              <div className="mb-2">
                <label
                  htmlFor="confirmPassword"
                  className="form-label"
                >
                  Confirm Password
                </label>

                <input
                  type="password"
                  id="confirmPassword"
                  className="form-control"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(event) =>
                    setConfirmPassword(event.target.value)
                  }
                  required
                />
              </div>

             
              {error && (
                <p className="text-danger mt-2" role="alert">
                  {error}
                </p>
              )}

              {success && (
                <p className="text-success mt-2" role="status">
                  {success}
                </p>
              )}

             
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  id="terms"
                  className="form-check-input"
                  checked={termsAccepted}
                  onChange={(event) =>
                    setTermsAccepted(event.target.checked)
                  }
                />

                <label
                  htmlFor="terms"
                  className="form-check-label"
                >
                  I agree to the Terms and Conditions
                </label>
              </div>

             
              <button
                type="submit"
                className="btn signup-btn w-100"
              >
                Sign Up
              </button>

            </form>

            <p className="login-link text-center mt-3 mb-0">
              Already have an account?{" "}
              <Link to="/login">Log In</Link>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}

export default SignUp;