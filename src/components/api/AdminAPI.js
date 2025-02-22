import { useState } from "react"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

// importing actions
import { setMessage } from "../redux/reducer/commonSlicer"
import { setLoggedIn, setToken, setUserDetails } from "../redux/reducer/userSlicer"

function AdminAPI() {

    const URL = "http://localhost:8080/api/v1"

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

  return {
    handleCategoryUpload,
    message,
    loading
  }
}

export default AdminAPI