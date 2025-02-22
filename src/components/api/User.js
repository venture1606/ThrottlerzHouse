import { useState } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// importing actions
import { setMessage } from '../redux/reducer/commonSlicer'
import { setLoggedIn, setToken, setUserDetails } from '../redux/reducer/userSlicer'

function User() {
    const URL = "http://128.199.104.109/api/v1"

    const [ loading, setLoading ] = useState(false);
    const userDetails = useSelector((state) => state.user.userDetails)

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const message = null;

    const handleLogin = async (credentials) => {
        setLoading(true);
        try {
            if (!credentials.email || !credentials.password) {
                dispatch(setMessage({ status: 'error', description: 'Please enter both email and password.', message: 'Invalid credentials' }));
                return;
            }

            const response = await axios.post(`${URL}/login`, credentials, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });

            const { token, user } = response.data;
            
            dispatch(setToken(token));
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            dispatch(setUserDetails(user));
            dispatch(setLoggedIn(true));
            dispatch(setMessage({
                status: 'success', 
                description: 'Logged In Succesfully',
                message: `Welcome ${user.name}`
            }));

        } catch (error) {
            console.log(error);
            const errorMessage = error.response?.data?.error || 'An error occurred';
            const errorStatus = error.response?.status || 500;
            
            dispatch(setMessage({ 
                status: 'error',
                description: errorMessage, 
                message: `Error ${errorStatus} occurred` 
            }));

        } finally {
            setLoading(false);
        }
    };

    const handleRegister = async (credentials) => {
        setLoading(true);
        try {
            if (!credentials.email || !credentials.password) {
                dispatch(setMessage({ status: 'error', description: 'Please enter both email and password.', message: 'Invalid credentials' }));
                return;
            }

            const response = await axios.post(`${URL}/register`, credentials, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });

            const { token, user } = response.data;

            dispatch(setToken(token));
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            dispatch(setUserDetails(user));
            dispatch(setLoggedIn(true));
            dispatch(setMessage({
                status: 'success', 
                description: 'Registered Succesfully',
                message: `Welcome ${user.name}`
            }));

        } catch (error) {
            console.log(error);
            const errorMessage = error.response?.data?.error || 'An error occurred';
            const errorStatus = error.response?.status || 500;
            
            dispatch(setMessage({ 
                status: 'error',
                description: errorMessage, 
                message: `Error ${errorStatus} occurred` 
            }));

        } finally {
            setLoading(false);
        }
    };

  return {
    handleLogin,
    handleRegister,
    loading,
    message
  }
}

export default User