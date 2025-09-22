import React from "react";
import "../../styles/auth-shared.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { backendUrl } from "../../App";
import { toast } from "react-toastify";

const FoodPartnerLogin = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const email = e.target.email.value;
      const password = e.target.password.value;

      const response = await axios.post(
        `${backendUrl}/api/auth/food-partner/login`,
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/create-food");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="auth-page-wrapper">
      <div
        className="auth-card"
        role="region"
        aria-labelledby="partner-login-title"
      >
        <header>
          <h1 id="partner-login-title" className="auth-title">
            Partner login
          </h1>
          <p className="auth-subtitle">
            Access your dashboard and manage orders.
          </p>
        </header>
        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="field-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="business@example.com"
              autoComplete="email"
            />
          </div>
          <div className="field-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              autoComplete="current-password"
            />
          </div>
          <button className="auth-submit" type="submit">
            Sign In
          </button>
        </form>
        <div className="auth-alt-action">
          New partner? <a href="/food-partner/register">Create an account</a>
        </div>
      </div>
    </div>
  );
};

export default FoodPartnerLogin;
