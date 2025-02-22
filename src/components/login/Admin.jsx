import React, { useState, useEffect } from "react";
import { Select } from "@chakra-ui/react";

// importing components
import Loading from "../common/Loading";

// importing API
import AdminAPI from '../api/AdminAPI';

// importing styles
import '../../assests/styles/common.css';

// importing datas
import ListItems from '../../assests/data/ListItems.json';

function Admin() {

    const { adminForm } = ListItems;
    const { handleCategoryUpload, message, loading } = AdminAPI();

    const [ selectedForm, setSelectedForm ] = useState('');

    const [ categoryName, setCategoryName ] = useState('');
    const [ categoryImage, setCategoryImage ] = useState('');
    const [ categoryProductsCount, setCategoryProductsCount ] = useState(0);

    const handleCategoryUploadForm = () => {
        handleCategoryUpload({ name: categoryName, image: categoryImage, productsCount: categoryProductsCount });
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

  return (
    <div className="AdminContainer">
        {loading && <Loading />}
        <h1>Admin</h1>
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
                <h1>Category Form</h1>
                <input type="text" placeholder="Category Name" onChange={(e) => setCategoryName(e.target.value)} />
                <input type="file" placeholder="Category Image" onChange={(e) => setCategoryImage(e.target.files[0])} />
                <input type="number" placeholder="Products Count" onChange={(e) => setCategoryProductsCount(parseInt(e.target.value))} />
                <button onClick={handleCategoryUploadForm}>Submit</button>
            </div>
            )
        }
        {
            selectedForm === 'UploadProduct' && (
            <div>
                <h1>Product Form</h1>
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
