import { useState } from "react"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

// importing actions
import { setMessage } from "../redux/reducer/commonSlicer"
import { setLoggedIn, setToken, setUserDetails } from "../redux/reducer/userSlicer"

function AdminAPI() {

    // const URL = "http://128.199.104.109/api/v1"
    const URL = "http://localhost:3008/api/v1"

    const [ loading, setLoading ] = useState(false)
    const userDetails = useSelector((state) => state.user.userDetails);
    const token = useSelector((state) => state.user.token);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const message = null;

    const handleCategoryUpload = async (category) => {
        setLoading(true);
        try {
            if (!category.name || !category.image || !category.productsCount) {
                dispatch(setMessage({ 
                    status: 'error', 
                    description: 'Please fill all the fields', 
                    message: 'Fill all the fields' 
                }));
                setLoading(false);
                return;
            }
    
            // Creating FormData to send image file
            const formData = new FormData();
            formData.append("name", category.name);
            formData.append("productsCount", category.productsCount);
            formData.append("image", category.image); // category.image should be a File object
    
            const response = await axios.post(`${URL}/category/new`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data", // Important for file uploads
                },
                withCredentials: true,
            });
    
            dispatch(setMessage({ 
                status: 'success', 
                description: 'Category Added Successfully', 
                message: 'Category Added Successfully' 
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

    const handleProductUpload = async (product) => {
        setLoading(true);
        try {
            if (!product.name || !product.description || !product.category || !product.brand || !product.stock || !product.price || !product.originalPrice || product.images.some(img => img === null)) {
                dispatch(setMessage({ 
                    status: 'error', 
                    description: 'Please fill all the fields and select 5 images', 
                    message: 'Fill all fields and select 5 images' 
                }));
                setLoading(false);
                return;
            }
    
            const formData = new FormData();
            formData.append("name", product.name);
            formData.append("description", product.description);
            formData.append("category", product.category);
            formData.append("brand", product.brand);
            formData.append("model", product.model);
            formData.append("stock", product.stock);
            formData.append("price", product.price);
            formData.append("originalPrice", product.originalPrice);
    
            product.images.forEach((image, index) => {
                formData.append(`images`, image);
            });
    
            const response = await axios.post(`${URL}/admin/product/new`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
                withCredentials: true,
            });
    
            dispatch(setMessage({ 
                status: 'success', 
                description: 'Product Added Successfully', 
                message: 'Product Added Successfully' 
            }));
    
        } catch (error) {
            console.log(error);
            const errorMessage = error.response?.data?.error || 'An error occurred';
            dispatch(setMessage({ 
                status: 'error',
                description: errorMessage, 
                message: `Error occurred` 
            }));
        } finally {
            setLoading(false);
        }
    };
    
  return {
    handleCategoryUpload,
    handleProductUpload,
    message,
    loading
  }
}

export default AdminAPI