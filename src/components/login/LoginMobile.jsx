import React, { useState, useEffect, useRef } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js';
import { useNavigate } from 'react-router-dom';

import User from '../api/User';
import Loading from '../common/Loading';
import '../../assests/styles/login.css';

function LoginMobile() {

    const navigate = useNavigate();
    const { handleLogin, loading, handleRegister } = User();
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showPassword, setShowPassword] = useState(false);
    const [show, setShow] = useState(false);
    
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ name, setName ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ bikeName, setBikeName ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');

    const currentIndexRef = useRef(0);
    const intervalRef = useRef(null);
    const timeoutRef = useRef(null);
    const [, forceUpdate] = useState(0); // To trigger updates only when necessary
  
    const images = [
      'https://th.bing.com/th/id/OIP.Se7xzMDsSjCkzA5wJoGgagHaHa?rs=1&pid=ImgDetMain',
      'https://wallpaperaccess.com/full/9020684.jpg',
      'https://wallpaperaccess.com/full/9020710.jpg'
    ];

  // Function to start the interval
  const startSliding = () => {
          intervalRef.current = setInterval(() => {
              currentIndexRef.current = (currentIndexRef.current + 1) % images.length;
              forceUpdate((n) => n + 1); // This forces a minimal re-render only when necessary
          }, 5000);
      };
  
      // Function to stop the interval
      const stopSliding = () => {
          clearInterval(intervalRef.current);
      };
  
      useEffect(() => {
          startSliding(); // Start sliding on mount
          window.scrollTo(0, 0);
          return () => clearInterval(intervalRef.current); // Cleanup on unmount
      }, []);
  
      const handleMouseEnter = () => {
          stopSliding(); // Stop the slideshow when hovered
          clearTimeout(timeoutRef.current); // Clear any pending timeout
      };
  
      const handleMouseLeave = () => {
          timeoutRef.current = setTimeout(() => {
              startSliding(); // Restart after 1 second
          }, 1000);
      };
  
      const EmptyValues = () => {
          setEmail(''); 
          setPassword('');
          setShow(!show);
      }
  
      const handleEmailChange = (e) => setEmail(e.target.value);
      const handlePasswordChange = (e) => setPassword(e.target.value);
      const handleNameChange = (e) => setName(e.target.value);
      const handlePhoneChange = (e) => setPhone(e.target.value);
      const handleBikeNameChange = (e) => setBikeName(e.target.value);
      const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
  
      const TogglePassword = () => setShowPassword(!showPassword);
  
      const handleSubmit = (e) => {
          e.preventDefault();
          handleLogin({ email, password });
          
          setEmail('');
          setPassword('');
      };
  
      const handleRegisterSubmit = (e) => {
          e.preventDefault();
  
          if (password !== confirmPassword) {
              alert('Passwords do not match');
              return;
          }
  
          handleRegister({ email, password, name, phone, bikeName });
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
        show ? 
            <div className="SignInContainer LoginLeft">
                <form className='SignInForm LoginForm'>
                    <h2 className='m-0'>Sign in</h2>
                    <input type='email' value={email} placeholder='Email' required onChange={handleEmailChange} />
                    <div className='PasswordContainer'>
                        <input type={showPassword ? 'text' : 'password'} value={password} placeholder='Password' required onChange={handlePasswordChange} />
                        <Icon 
                            icon={showPassword ? 'material-symbols:visibility-off' : 'material-symbols:visibility'} 
                            className='EyeIcon'
                            onClick={TogglePassword}
                        />
                    </div>
                    <button className='ButtonStyle CreateAccount' onClick={handleSubmit}>Sign in</button>
                    <span className='cursor-pointer Account'>Forgot password?</span>
                    <span className='cursor-pointer Account' onClick={() => setShow(false)}>Don't have an account? <a>Create account</a></span>
                </form>
            </div>
        : 
        <div className='LoginLeft'>
            <button className='LoginButton cursor-pointer' onClick={() => navigate('/')}>
                <Icon icon='material-symbols-light:arrow-back-2-rounded' className='Icon' /> 
                Back to website
            </button>
            <h2 className='m-0'>Create an account</h2>
            <span className='cursor-pointer Account' onClick={() => setShow(true)}>Already have an account? <a >Login</a></span>
            <form className='LoginForm' onSubmit={(e) => { e.preventDefault(); console.log("Form submitted"); }}>
                <div className='DetailsContainer'>
                    <input type='text' placeholder='Name' required onChange={handleNameChange} />
                    <input type='tel' placeholder='Eg: 1234567890' pattern='[0-9]{10}' title='Enter a valid phone number' required  onChange={handlePhoneChange}/>
                </div>
                <input type='email' placeholder='Email' required />
                <div className='PasswordContainer'>
                    <input type={showPassword ? 'text' : 'password'} placeholder='Enter your password' required onChange={handlePasswordChange} />
                    <Icon 
                        icon={showPassword ? 'mdi:eye-off' : 'mdi:eye'} 
                        className='EyeIcon'
                        onClick={TogglePassword}
                    />    
                </div>
                <input type={showPassword ? 'text' : 'password'} placeholder='Confirm password' required onChange={handleConfirmPasswordChange} />
                <button onClick={handleRegisterSubmit} className='ButtonStyle CreateAccount'>Create account</button>
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