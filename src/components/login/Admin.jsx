import React, { useState, useEffect } from "react";
import { Select } from "@chakra-ui/react";

// importing components
import Loading from "../common/Loading";

// importing API
import AdminAPI from '../api/AdminAPI';
import User from "../api/User";

// importing styles
import '../../assests/styles/common.css';

// importing datas
import ListItems from '../../assests/data/ListItems.json';

function Admin() {

    const { adminForm } = ListItems;
    const { handleLogout } = User();
    const { handleCategoryUpload, handleProductUpload, loading } = AdminAPI();

    const [ selectedForm, setSelectedForm ] = useState('');

    const [ categoryName, setCategoryName ] = useState('');
    const [ categoryImage, setCategoryImage ] = useState(null);
    const [ categoryProductsCount, setCategoryProductsCount ] = useState('');

    const [ productName, setProductName ] = useState('');
    const [ productDescription, setProductDescription ] = useState('');
    const [ productCategory, setProductCategory ] = useState('');
    const [ productBrand, setProductBrand ] = useState('');
    const [ productStock, setProductStock ] = useState('');
    const [ productModel, setProductModel ] = useState('');
    const [ productPrice, setProductPrice ] = useState('');
    const [ productOriginalPrice, setProductOriginalPrice ] = useState('');
    const [ productImages, setProductImages ] = useState([null, null, null, null, null]);


    const handleCategoryUploadForm = () => {
        handleCategoryUpload({ name: categoryName, image: categoryImage, productsCount: categoryProductsCount });
    }

    const handleProductImageChange = (e, index) => {
        const files = [...productImages]; // Clone existing array
        files[index] = e.target.files[0]; // Update the specific index
        setProductImages(files); // Set updated array in state
    
        console.log("Updated product images:", files);
    };
    
    
    const handleProductUploadForm = () => {
        handleProductUpload({
            name: productName,
            description: productDescription,
            category: productCategory,
            brand: productBrand,
            stock: productStock,
            model: productModel,
            price: productPrice,
            originalPrice: productOriginalPrice,
            images: productImages
        });
    }

    const handleClear = () => {
        console.log("Clearing form entries");
        setCategoryName('');
        setCategoryImage(null);
        setCategoryProductsCount(0);

        setProductName('');
        setProductDescription('');
        setProductCategory('');
        setProductBrand('');
        setProductStock(0);
        setProductModel('');
        setProductPrice(0);
        setProductOriginalPrice(0);
        setProductImages([null, null, null, null, null]);
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

  return (
    <div className="AdminContainer">
        {loading && <Loading />}
        <div className="HeadingForm">
            <h1>Admin</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
        <Select placeholder="Select form" size="sm" width="320px" onChange={(e) => setSelectedForm(e.target.value)}>
            {adminForm.map((framework) => (
            <option key={framework.value} value={framework.value}>
                {framework.label}
            </option>
            ))}
        </Select>
        {
            selectedForm === 'CategoryForm' && (
                <div className="AdminFormContainer">
                    <div className="HeadingForm">
                        <h1>Category Form</h1>
                        <button onClick={handleClear}>Clear</button>
                    </div>
                    <input type="text" placeholder="Category Name" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
                    <input type="file" placeholder="Category Image" onChange={(e) => setCategoryImage(e.target.files[0])} />
                    <input type="number" placeholder="Products Count" value={categoryProductsCount} onChange={(e) => setCategoryProductsCount(parseInt(e.target.value))} />
                    <button onClick={handleCategoryUploadForm}>Submit</button>
                </div>
            )
        }
        {
            selectedForm === 'UploadProduct' && (
                <div className="AdminFormContainer">
                    <div className="HeadingForm">
                        <h1>Add Product Form</h1>
                        <button onClick={handleClear}>Clear Form Entires</button>
                    </div>
                    <input type="text" placeholder="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} />
                    <input type="text" placeholder="Product Description" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} />
                    <input type="text" placeholder="Product Category" value={productCategory} onChange={(e) => setProductCategory(e.target.value)} />
                    <input type="text" placeholder="Product Brand" value={productBrand} onChange={(e) => setProductBrand(e.target.value)} />
                    <input type="number" placeholder="Product Stock" value={productStock} onChange={(e) => setProductStock(parseInt(e.target.value))} />
                    <input type="text" placeholder="Product Model" value={productModel} onChange={(e) => setProductModel(e.target.value)} />
                    <input type="number" placeholder="Price" value={productPrice} onChange={(e) => setProductPrice(parseInt(e.target.value))} />
                    <input type="number" placeholder="Original Price" value={productOriginalPrice} onChange={(e) => setProductOriginalPrice(parseInt(e.target.value))} />
                    
                    <input type="file" onChange={(e) => handleProductImageChange(e, 0)} accept="image/*" />
                    <input type="file" onChange={(e) => handleProductImageChange(e, 1)} accept="image/*" />
                    <input type="file" onChange={(e) => handleProductImageChange(e, 2)} accept="image/*" />
                    <input type="file" onChange={(e) => handleProductImageChange(e, 3)} accept="image/*" />
                    <input type="file" onChange={(e) => handleProductImageChange(e, 4)} accept="image/*" />

                    <button onClick={handleProductUploadForm}>Submit</button>
                </div>
            )
        }
        {
            selectedForm === 'AllUser' && (
            <div>
                <h1>Service Form</h1>
            </div>
            )
        }
        {
            selectedForm === 'UploadBlogs' && (
            <div>
                <h1>Blog Form</h1>
            </div>
            )
        }
    </div>
  );
}

export default Admin;
