import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="container">
      <h1 className="mb-4">Signup</h1>
      
      {/* Username input */}
      <input
        id="wd-username"
        placeholder="username"
        className="form-control mb-3"
      />
      
      {/* Password input */}
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        className="form-control mb-3"
      />
      
      {/* Verify Password input */}
      <input
        id="wd-verify-password"
        placeholder="verify password"
        type="password"
        className="form-control mb-4"
      />

      {/* Signup Button */}
      <Link
        to="/Kanbas/Account/Profile"
        className="btn btn-primary mb-3"
      >
        Signup
      </Link>

      {/* Signin Link */}
      <div>
        <Link to="/Kanbas/Account/Signin">
          Signin
        </Link>
      </div>
    </div>
  );
}
