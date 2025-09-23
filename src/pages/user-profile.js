import { useState } from 'react';
import Head from 'next/head';

export default function Profile() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [paypal, setPaypal] = useState('');
  const [dob, setDob] = useState('');
  const [error, setError] = useState('');
  const [profileData, setProfileData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validations
    if (!username.trim()) {
      setError('Please enter a user name');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (!paypal.trim()) {
      setError('Please enter a valid PayPal ID');
      return;
    }

    const selectedDob = new Date(dob);
    const currentDate = new Date('2025-09-23'); // Using the provided current date
    if (selectedDob > currentDate) {
      setError('Date of Birth cannot be in the future');
      return;
    }

    setError('');

    // Save profile data
    setProfileData({
      username,
      email,
      paypal,
      dob,
    });

    // Reset form
    setUsername('');
    setEmail('');
    setPaypal('');
    setDob('');
  };

  return (
    <>
      <Head>
        <title>User Profile</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="container">
        <div className="profile-container">
          <h2>Hi, Roynt M</h2>
          <form id="profileForm" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                id="username"
                placeholder=" "
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="username">User Name</label>
            </div>
            <div className="input-group">
              <input
                type="email"
                id="email"
                placeholder=" "
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email">User Email</label>
            </div>
            <div className="input-group">
              <input
                type="text"
                id="paypal"
                placeholder=" "
                required
                value={paypal}
                onChange={(e) => setPaypal(e.target.value)}
              />
              <label htmlFor="paypal">PayPal ID</label>
            </div>
            <div className="input-group">
              <input
                type="date"
                id="dob"
                placeholder=" "
                required
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                max="2025-09-23" // Prevent future dates based on provided current date
              />
              <label htmlFor="dob">Date of Birth</label>
            </div>
            <button type="submit">Save Profile</button>
            {error && <div className="error-message">{error}</div>}
          </form>
          {profileData && (
            <div className="profile-display">
              <h3>Profile Details</h3>
              <p><strong>Name:</strong> {profileData.username}</p>
              <p><strong>Email:</strong> {profileData.email}</p>
              <p><strong>PayPal ID:</strong> {profileData.paypal}</p>
              <p><strong>Date of Birth:</strong> {profileData.dob}</p>
            </div>
          )}
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
          padding-top: 6rem;
          padding-bottom: 2rem;
        }

        .profile-container {
          background: #ffffff;
          padding: 2.5rem;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          width: 100%;
          max-width: 500px;
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

        .profile-display {
          margin-top: 2rem;
          padding: 1.5rem;
          border: 1px solid #dddddd;
          border-radius: 5px;
          background: #f9f9f9;
        }

        .profile-display h3 {
          color: #2ec4b6;
          font-size: 1.2rem;
          margin-bottom: 1rem;
        }

        .profile-display p {
          color: #333333;
          font-size: 1rem;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        .error-message {
          text-align: center;
          margin-top: 1rem;
          color: red;
          font-size: 0.9rem;
        }

        @media (max-width: 480px) {
          .profile-container {
            margin: 1rem;
            padding: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}