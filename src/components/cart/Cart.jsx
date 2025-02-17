import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// importing components
import Card from '../common/Card'

// importing styles
import '../../assests/styles/cart.css'

// importing data
import ListItems from '../../assests/data/ListItems.json'

function Cart() {

    const { cards } = ListItems;
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className='CartContainer'>
        <div className='CartCardsContainer'>
            <div className='UserCartContainer'>
                <h3>Your Cart</h3>
                <div className='CategoryGrid'>
                    {/* show only if the cart is true */}
                    {
                        cards.map((item, index) => (
                            item.cart && <Card key={item.id} card={item}/>
                        ))
                    }
                </div>
            </div>
            <div className='WishListContainer'>
                <h3>Wishlist</h3>
                <div className='CategoryGrid'>
                    {/* show only if the wishlist is true */}
                    {
                        cards.map((item, index) => (
                            item.wishlist ? <Card key={item.id} card={item}/> : null
                        ))
                    }
                </div>
            </div>
        </div>
        <div className='BillingContainer'>
            <h3>Billing</h3>
            <div className='BillingDetailsContainer'>
                <span>Subtotal (2 items): $1,000</span>
                <span>Shipping: $10</span>
                <hr className='m-0'/>
                <h5>Total: $1,010</h5>
                <hr className='m-0'/>
            </div>
            <div className='BillingButtonContainer'>
                <button className='ButtonStyle' onClick={() => navigate('/checkout')}>Proceed to checkout</button>
                <button className='ButtonStyle' onClick={() => navigate('/category')}>Continue shopping</button>
            </div>
        </div>
    </div>
  )
}

export default Cart