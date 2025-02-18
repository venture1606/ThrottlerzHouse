import React, { useState, useEffect, useRef } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js';
import { useNavigate } from 'react-router-dom';

function LoginMobile() {

  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [show, setShow] = useState(false);

  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const images = [
      'https://th.bing.com/th/id/OIP.Se7xzMDsSjCkzA5wJoGgagHaHa?rs=1&pid=ImgDetMain',
      'https://wallpaperaccess.com/full/9020684.jpg',
      'https://wallpaperaccess.com/full/9020710.jpg'
  ];

  // Function to start the interval
  const startSliding = () => {
      intervalRef.current = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
  };

  // Function to stop the interval
  const stopSliding = () => {
      clearInterval(intervalRef.current);
  };

  useEffect(() => {
      startSliding(); // Start sliding on mount
      return () => clearInterval(intervalRef.current); // Cleanup on unmount
      window.scrollTo(0, 0);
  }, []);

  const handleMouseEnter = () => {
      stopSliding(); // Stop the slideshow when hovered
      clearTimeout(timeoutRef.current); // Clear any pending timeout
  };

  const handleMouseLeave = () => {
      timeoutRef.current = setTimeout(() => {
          startSliding(); // Restart after 3 seconds
      }, 1000);
  };

  const TogglePassword = () => {
      setShowPassword(!showPassword);
  };


  const LoginForm = () => {
      return (
          <div className="SignInContainer LoginLeft">
              <form className='SignInForm LoginForm' onSubmit={(e) => { e.preventDefault(); console.log("Form submitted"); }}>
                  <h2 className='m-0'>Sign in</h2>
                  <input type='email' placeholder='Email' required />
                  <div className='PasswordContainer'>
                      <input type={showPassword ? 'text' : 'password'} placeholder='Password' required />
                      <Icon 
                          icon={showPassword ? 'material-symbols:visibility-off' : 'material-symbols:visibility'} 
                          className='EyeIcon'
                          onClick={TogglePassword}
                      />
                  </div>
                  <button type='submit' className='ButtonStyle CreateAccount'>Sign in</button>
                  <span className='cursor-pointer Account'>Forgot password?</span>
                  <span className='cursor-pointer Account' onClick={() => setShow(false)}>Don't have an account? <a>Create account</a></span>
              </form>
          </div>
      )
  }

  return (
    <div className='LoginMobileContainer'>
      <div 
        className='LoginRight' 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
      >
        <div className="ImageContainer" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {images.map((img, index) => (
                <img key={index} src={img} alt={`Slide ${index + 1}`} className="SlidingImage" />
            ))}
        </div>
        <div className='DashContainer'>
          {images.map((_, index) => (
              <Icon 
                  key={index} 
                  icon='octicon:dash-16' 
                  className={`DashIcon ${currentIndex === index ? 'DashActive' : ''}`} 
              />
          ))}
        </div>
      </div>
      {
        show ? <LoginForm /> : 
        <div className='LoginLeft'>
            <button className='LoginButton cursor-pointer' onClick={() => navigate('/')}>
                <Icon icon='material-symbols-light:arrow-back-2-rounded' className='Icon' /> 
                Back to website
            </button>
            <h2 className='m-0'>Create an account</h2>
            <span className='cursor-pointer Account' onClick={() => setShow(true)}>Already have an account? <a >Login</a></span>
            <form className='LoginForm' onSubmit={(e) => { e.preventDefault(); console.log("Form submitted"); }}>
                <div className='DetailsContainer'>
                    <input type='text' placeholder='Name' required />
                    <input type='tel' placeholder='Eg: 1234567890' pattern='[0-9]{10}' title='Enter a valid phone number' required />
                </div>
                <input type='email' placeholder='Email' required />
                <div className='PasswordContainer'>
                    <input type={showPassword ? 'text' : 'password'} placeholder='Enter your password' required />
                    <Icon 
                        icon={showPassword ? 'mdi:eye-off' : 'mdi:eye'} 
                        className='EyeIcon'
                        onClick={TogglePassword}
                    />    
                </div>
                <input type={showPassword ? 'text' : 'password'} placeholder='Confirm password' required />
                <button type='submit' className='ButtonStyle CreateAccount'>Create account</button>
                <div className='OrContainer'>
                    <hr/>
                    <span> or Register with </span>
                    <hr/>    
                </div>
                <div className='SocialContainer'>
                    <button className='ButtonStyle Google'>
                        <Icon icon="flat-color-icons:google" className='GoogleIcon' /> Google
                    </button>
                    <button className='ButtonStyle Facebook'>
                        <Icon icon="line-md:facebook" className='FacebookIcon' /> Facebook
                    </button>
                </div>
            </form>
        </div>
      }
    </div>
  )
}

export default LoginMobile