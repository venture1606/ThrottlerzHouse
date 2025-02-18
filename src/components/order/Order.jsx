import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js';

// importing styles
import '../../assests/styles/order.css'

// importing data.
import ListItems from '../../assests/data/ListItems.json'

function Order() {

    const { order, user } = ListItems;

    const OrderProduct = ({ data, user, index }) => {
        return (
            <div className='OrderProduct'>
                <h1>{index + 1}</h1>
                <div className='OrderProductDetailsContainer'>
                    <div className='OrderProductDetails'>
                        <h3>Item</h3> 
                        <span>{data.title}</span>
                    </div>
                    <div className='OrderProductDetails'>
                        <h3>Address</h3>
                        <p className='m-0'>{user.phone}</p>
                        <span>{user.address}</span>
                    </div>
                    <div className='OrderProductDetails'>
                        <h3>Courier Company</h3>
                        <span>XYZ Courier</span>
                    </div>
                    <div className='OrderProductDetails'>
                        <h3>Estimated Delivery Time</h3>
                        <span>27-05-2025</span>
                    </div>
                </div>
                <hr />
            </div>
        )
    }


  return (
    <div className='OrderContainer'>
        <div className='OrderRightContainer'>
            {
                order.map((item, index) => (
                    <OrderProduct key={index} data={item} user={user} index={index}/>
                ))
            }
        </div>
        <div className='OrderLeftContainer'>
            <div className='Bill'>
                <h3>Billing</h3>
                <div className='BillingDetailsContainer'>
                    <span>Subtotal (2 items): $1,000</span>
                    <span>Shipping: $10</span>
                    <hr className='m-0'/>
                    <h5>Total: $1,010</h5>
                    <hr className='m-0'/>
                </div>
            </div>
            <div className='PaymentContainer'>
                <h3>Payment</h3>
                <div className='PaymentDetailsContainer'>
                    <span>Payment Method: Cash on delivery</span>
                </div>
                <div className='PaymentDetailsContainer'>
                    <h5>Payment Details</h5>
                    <div className='PaymentOptionsContainer'>
                        <div className='PaymentOption'>
                            <Icon icon=""/>
                        </div>
                    </div>
                </div>
                <div className='PaymentButtonContainer'>
                    <button>
                        Cancel Order
                    </button>
                    <button>
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Order