import { useState } from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Login functionality would be implemented here!');
  };

  return (
    <>
       <NextSeo
              title= 'Registration | supercosts.com'
            />
      <div className="container">
        <div className="login-container">
          <h2>Login</h2>
          <form id="loginForm" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="email"
                id="email"
                placeholder=" "
                required
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-group">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder=" "
                required
              />
              <label htmlFor="password">Password</label>
              <span
                title='show password'
                className="password-toggle"
                onClick={togglePassword}
              >
                {showPassword ? '🐵' : '🙈'} 
              </span>
            </div>
            <button type="submit">Login</button>
            <div className="forgot-password">
              <a href="#">Forgot Password?</a>
              <a href="register">Sign Up </a>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        
        .container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #ff9966, #ff5e62);
          max-width: 100%;
        }

        .login-container {
          background: #ffffff;
          padding: 2.5rem;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          width: 100%;
          max-width: 400px;
          animation: fadeIn 0.5s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        h2 {
          color: #2ec4b6;
          text-align: center;
          margin-bottom: 2rem;
          font-size: 1.8rem;
          font-weight: 600;
          line-height: 1.5;
        }

        .input-group {
          position: relative;
          margin-bottom: 1.5rem;
        }

        .input-group input {
          width: 100%;
          padding: 0.8rem;
          border: 1px solid #dddddd;
          border-radius: 5px;
          font-size: .9rem;
          outline: none;
          background: transparent;
          transition: border-color 0.3s;
          font-weight: 500;
        }

        .input-group input:focus {
          border-color: #2ec4b6;
        }

        .input-group label {
          position: absolute;
          top: 50%;
          left: 0.8rem;
          transform: translateY(-50%);
          color: #666666;
          pointer-events: none;
          transition: all 0.3s ease;
          background: #ffffff;
          padding: 0 5px;
          font-size: 1rem;
          font-weight: 500;
        }

        .input-group input:focus + label,
        .input-group input:not(:placeholder-shown) + label {
          top: 0;
          font-size: 0.8rem;
          color: #2ec4b6;
        }

        .password-toggle {
          position: absolute;
          right: 0.8rem;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
          color: #666666;
          font-size: 1.2rem;
          font-weight: 600;
        }

        button {
          width: 100%;
          padding: 0.8rem;
          background: #2ec4b6;
          border: none;
          border-radius: 5px;
          color: #ffffff;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.3s, transform 0.2s;
          font-weight: 500;
        }

        button:hover {
          background: #26a69a;
          transform: translateY(-2px);
        }

        button:active {
          transform: translateY(0);
        }

        .forgot-password {
          
          margin-top: 1rem;
          display:flex;
          justify-content: space-between;
          align-items: center;
        }

        .forgot-password a {
          color: #2ec4b6;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500
        }

        .forgot-password a:hover {
          text-decoration: underline;
        }

        @media (max-width: 480px) {
          .login-container {
            margin: 1rem;
            padding: 1.5rem;
          }
          .container{
            padding-top: 6rem
          }
        }
      `}</style>
    </>
  );
}