import React from 'react'
import { useNavigate } from 'react-router-dom'

function CategoryMobile() {

    const navigate = useNavigate();

  return (
    <div>
        <button className='btn btn-primary' onClick={() => navigate('/product')}>Single Product</button>
        Cattegory Mobile
    </div>
  )
}

export default CategoryMobile