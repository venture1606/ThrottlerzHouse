import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

// importing components
import Card from '../common/Card'

// importing API
import User from '../api/User'

// importing styles
import '../../assests/styles/cart.css'

function Cart() {

    const navigate = useNavigate();

    const wishList = useSelector((state) => state.category.wishList);
    const cartList = useSelector((state) => state.category.cartList);
    
    const { handleGettingCart, handleGetWishlist } = User();

    useEffect(() => {
        window.scrollTo(0, 0);
        // Fetching the cart items when the component mounts
        handleGettingCart();
        // Fetching the wishlist items when the component mounts
        handleGetWishlist();
    }, []);

  return (
    <div className='CartContainer'>
        <div className='CartCardsContainer'>
            <div className='UserCartContainer'>
                <h3>Your Cart</h3>
                <div className='CategoryGrid'>
                    {/* show only when cartList is not empty */}
                    {
                        cartList && cartList.map((item, index) => (
                            item.product && <Card key={item.id} card={item.product}/>
                        ))
                    }
                </div>
            </div>
            <div className='WishListContainer'>
                <h3>Wishlist</h3>
                <div className='CategoryGrid'>
                    {/* show only if the wishlist is true */}
                    {
                        wishList && wishList.map((item, index) => (
                            item && <Card key={item.id} card={item}/>
                        ))
                    }
                </div>
            </div>
        </div>
        <div className='BillingContainer'>
            <h3>Billing</h3>
            <div className='BillingDetailsContainer'>
                <span>Subtotal (${cartList.length} items): $1,000</span>
                <span>Shipping: $10</span>
                <hr className='m-0'/>
                <h5>Total: $1,010</h5>
                <hr className='m-0'/>
            </div>
            <div className='BillingButtonContainer'>
                <button className='ButtonStyle' onClick={() => navigate('/order')}>Proceed to checkout</button>
                <button className='ButtonStyle' onClick={() => navigate('/category')}>Continue shopping</button>
            </div>
        </div>
    </div>
  )
}

export default Cart