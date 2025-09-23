import { useState } from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setError('');
    alert('Registration functionality would be implemented here!');
  };

  return (
    <>
      <NextSeo
        title= 'Registration | supercosts.com'
      />
      <div className="container">
        <div className="login-container">
          <h2>Register</h2>
          <form id="registerForm" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                id="username"
                placeholder=" "
                required
              />
              <label htmlFor="username">User Name</label>
            </div>
            <div className="input-group">
              <input
                type="email"
                id="email"
                placeholder=" "
                required
              />
              <label htmlFor="email">User Email</label>
            </div>
            <div className="input-group">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder=" "
                required
              />
              <label htmlFor="password">Create Password</label>
              <span
                title='show password'
                className="password-toggle"
                onClick={togglePassword}
              >
                {showPassword ? '🐵' : '🙈'} 
              </span>
            </div>
            <div className="input-group">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                placeholder=" "
                required
              />
              <label htmlFor="confirmPassword">Confirm Password</label>
              <span
                title='show password'
                className="password-toggle"
                onClick={toggleConfirmPassword}
              >
               {showPassword ? '🐵' : '🙈'} 
              </span>
            </div>
            <button type="submit">Register</button>
            <div className="forgot-password">
            
              <a href="register">Already have an account? Login here</a>
            </div>
            {error && <div className="error-message">{error}</div>}

          </form>
        </div>
      </div>

      <style jsx>{`
        

        .container {
          padding: 3rem 0;
          max-width: 100%;
          display: flex;
          justify-content: center;
          background: linear-gradient(135deg, #ff9966, #ff5e62);
          padding-top: 6rem
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
          margin-bottom: 1rem;
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
          font-size: .9rem;
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
          font-size: 1.1rem;
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
          font-weight: 500
        }

        button:hover {
          background: #26a69a;
          transform: translateY(-2px);
        }

        button:active {
          transform: translateY(0);
        }

        .error-message {
          text-align: center;
          margin-top: 1rem;
          color: red;
          font-size: 0.9rem;
        }

        @media (max-width: 480px) {
          .login-container {
            margin: 1rem;
            padding: 1.5rem;
          }
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
      `}</style>
    </>
  );
}