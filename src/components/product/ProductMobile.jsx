import React from 'react'
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

// importing the styles
import '../../assests/styles/productMobile.css'

function ProductMobile() {

    const navigate = useNavigate();

  return (
    <div className='ProductMobileContainer'>
        <div className="BackButtonContainer cursor-pointer ButtonStyle">
            <Icon
                icon="proicons:home"
                className="Icon"
                onClick={() => navigate("/")}
            />
        </div>
        This page is under construction. Please visit the desktop version of the website.
    </div>
  )
}

export default ProductMobile