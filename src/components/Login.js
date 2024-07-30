import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from '../styles/login.module.css';
import 'boxicons/css/boxicons.min.css';

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <>
      <Navbar />
      <div className={styles.loginContainer}>
        {!isSignup ? (
          <div className={styles.loginForm} id="loginForm">
            <h1>Sign In</h1>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.icon}><i className='bx bxl-google-plus'></i></a>
              <a href="#" className={styles.icon}><i className='bx bxl-facebook'></i></a>
              <a href="#" className={styles.icon}><i className='bx bxl-github'></i></a>
              <a href="#" className={styles.icon}><i className='bx bxl-linkedin'></i></a>
            </div>

            <div className={styles.formMessageContainer}>
              <span>Or use your email and password</span>
            </div>

            <form className={styles.form}>
              <input type="email" placeholder="Email"/>
              <input type="password" placeholder="Password" />
              <button type="submit">Sign In</button>
              <a href="#">Forgot Your Password?</a>
            </form>
            <p>Don't have an account? <button onClick={() => setIsSignup(true)}>Sign Up</button></p>
          </div>
        ) : (
          <div className={styles.signupForm} id="signupForm">
            <h1>Create An Account</h1>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.icon}><i className='bx bxl-google-plus'></i></a>
              <a href="#" className={styles.icon}><i className='bx bxl-facebook'></i></a>
              <a href="#" className={styles.icon}><i className='bx bxl-github'></i></a>
              <a href="#" className={styles.icon}><i className='bx bxl-linkedin'></i></a>
            </div>
            <div className={styles.formMessageContainer}>
              <span>Or use your email for registration</span>
            </div>

            <form className={styles.form}>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <button onClick={() => setIsSignup(false)}>Sign In</button></p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Login;
