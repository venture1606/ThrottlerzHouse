import { useState } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// importing actions
import { setMessage } from '../redux/reducer/commonSlicer'
import { setCategories, setProducts, setSingleProduct, setCartList, setWishList } from '../redux/reducer/categorySlice'
import { setLoggedIn, setToken, setUserDetails } from '../redux/reducer/userSlicer'

function User() {
    // const URL = "http://128.199.104.109/api/v1"
    const URL = "http://localhost:3008/api/v1"

    const [ loading, setLoading ] = useState(false);
    const userDetails = useSelector((state) => state.user.userDetails);
    const token = useSelector((state) => state.user.token);

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

    const handleLogout = () => {
        dispatch(setLoggedIn(false));
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        dispatch(setToken(null));
        dispatch(setUserDetails(null));

        try{
            const response = axios.get(`${URL}/logout`);
            
            dispatch(setMessage({
                status: 'success',
                description: 'Logged out successfully',
                message: `${userDetails.name} see you soon`,
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
        }

        navigate('/login');
    };

    const handleCategoryDetails = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${URL}/categories`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true,
            });

            console.log(response.data.categories);
    
            dispatch(setCategories({ categories: response.data.categories }));
            
            // dispatch(setMessage({
            //     status: 'success',
            //     description: 'Categories fetched successfully',
            //     message: 'Categories fetched successfully',
            // }));
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

    const handleProductDetails = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${URL}/products`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true,
            });

            dispatch(setProducts({ products: response.data.products }));
            
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

    const handleSingleProduct = async (id) => {
        setLoading(true);
        try {
            const response = await axios.get(`${URL}/product/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true,
            });

            let singleProduct = response.data.product;

            dispatch(setSingleProduct(singleProduct));
            
            dispatch(setMessage({
                status: 'success',
                description: 'Single fetched successfully',
                message: 'Single fetched successfully',
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

    const handleAddingToCart = async (credentials) => {
        setLoading(true);
        try {
            const response = await axios.post(`${URL}/cart`, credentials, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true,
            });

            const updateCart = response.data.user.cart;

            // add the response data to the cart in userDetails
            dispatch(setCartList(updateCart));

            dispatch(setMessage({
                status: 'success',
                description: 'Product added to cart successfully',
                message: 'Product added to cart successfully',
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

    const handleGettingCart = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${URL}/cart/items`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true,
            });

            dispatch(setCartList(response.data.user.cart));

            
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
    }

    const handleRemovingFromCart = async (productId) => {
        setLoading(true);
        try {
            const response = await axios.delete(`${URL}/cart/remove`, {
                data: { productId },
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true,
            });

            dispatch(setCartList(response.data.user.cart));

            dispatch(setMessage({
                status: 'success',
                description: 'Product removed from cart successfully',
                message: 'Product removed from cart successfully',
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
    
    const handleRemoveWishlist =  async (productId) => {
        setLoading(true);
        try {
            const response = await axios.delete(`${URL}/wishlist/remove`, {
                data: { productId },
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true,
            });

            const updatedWishlist = response.data.user.wishlist;

            dispatch(setWishList(updatedWishlist));

            dispatch(setMessage({
                status: 'success',
                description: 'Product removed from wishlist successfully',
                message: 'Product removed from wishlist successfully',
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
    }

    const handleAddingWishlist =  async (productId) => {
        setLoading(true);
        try {
            const response = await axios.post(`${URL}/wishlist`, { productId }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true,
            });

            const updatedWishlist = response.data.user.wishlist;

            dispatch(setWishList(updatedWishlist));
            console.log("Wishlist Updated");

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
    }

    const handleGetWishlist = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${URL}/wishlist/items`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true,
            });

            dispatch(setWishList(response.data.user.wishlist));
            console.log("Added wishlist:"+response.data.user.wishlist);

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
    }
     
  return {
    handleLogin,
    handleRegister,
    handleCategoryDetails,
    handleSingleProduct,
    handleProductDetails,
    handleAddingToCart,
    handleRemovingFromCart,
    handleGettingCart,
    handleAddingWishlist,
    handleRemoveWishlist,
    handleGetWishlist,
    handleLogout,
    loading,
    message
  }
}

export default User