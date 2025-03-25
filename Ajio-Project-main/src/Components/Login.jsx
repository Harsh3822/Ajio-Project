import React from 'react';
import Navbar from './Navbar';
import GoogleButton from 'react-google-button';
import { signInWithPopup } from 'firebase/auth';
import { auth , provider } from '../Service/firebase'; 
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const [user, error] = useAuthState(auth);

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log('Logged in user:', res.user);
      })
      .catch((err) => {
        // console.error('Login error:', err);
        alert('Login failed. Please try again.');
      });
  };

 
  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Navbar />
      <h2>Please sign in to continue</h2>
      {error && <p>Error: {error.message}</p>}
      <GoogleButton onClick={handleLogin} />
    </div>
  );
};

export default Login;
