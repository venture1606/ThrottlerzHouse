import React, { useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js';

// importing data
import ListItems from '../../assests/data/ListItems.json';

function OrderMobile() {

  const { order, user } = ListItems;
  const [ status, setStatus ] = useState(false);
  const [ cashType, setCashType ] = useState(null);
  const [ amount, setAmount ] = useState(1010);
  const [shippingOption, setShippingOption] = useState('Order History');

  const PaidStatus = () => {
      setStatus(true);
  }

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
                      <span>{data.courierOffice}</span>
                  </div>
                  <div className='OrderProductDetails'>
                      <h3>Estimated Delivery Time</h3>
                      <span>{data.estimatedDelivery}</span>
                  </div>
                  {
                      status 
                      &&
                      <div className='OrderProductDetails'>
                          <h3>Payment Status</h3>
                          <span>Paid</span>
                      </div>
                  }
                  {
                      status 
                      &&
                      <div className='OrderProductDetails'>
                          <h3>Order Status</h3>
                          <span>{data.status}</span>
                      </div>
                  }
                  {
                      status
                      &&
                      <div className='OrderProductDetails'>
                          <h3>Tracking ID</h3>
                          <span>{data.trackingId}</span>
                      </div>
                  }
              </div>
              <hr />
          </div>
      )
  }

  return (
    <div className='OrderShippingContainer'>
      <div className='OrderMobileContainer'>
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
                    <h5>Total: ${amount}</h5>
                    <hr className='m-0'/>
                </div>
            </div>
            <div className='PaymentContainer'>
                <h3>Payment</h3>
                <div className='PaymentDetailsContainer'>
                    <h5>Payment Details</h5>
                    <div className='PaymentOptionsContainer'>
                        <div className='PaymentOption ButtonStyle' onClick={() => setCashType('Card')}>
                            <Icon icon="solar:card-outline" className='Icon'/>
                            <span>Card</span>
                        </div>
                        <div className='PaymentOption ButtonStyle' onClick={() => setCashType('UPI Pay')}>
                            <Icon icon="material-symbols-light:upi-pay-outline-rounded" className='Icon'/>
                            <span>UPI Pay</span>
                        </div>
                        <div className='PaymentOption ButtonStyle' onClick={() => setCashType('Cash on Delivery')}>
                            <Icon icon="streamline:subscription-cashflow" className='Icon'/>
                            <span>Cash on Delivery</span>
                        </div>
                    </div>
                    <div className='PaymentDetailsContainer'>
                        { cashType !== null && <span>Payment Method: {cashType}</span> }
                        {
                            cashType === 'Cash on Delivery' 
                            &&
                            
                            <div className='DeliveryDetailsContainer'>
                                <ul>
                                    <li>You will be paying the cash by the courier company</li>
                                    <li>in case of any exchange required cash will be returned</li>
                                    <li>So, please make sure you have enough cash</li>
                                </ul>
                            </div>
                        }
                        {
                            cashType === 'UPI Pay' 
                            &&
                            <div className='DeliveryDetailsContainer'>
                                <input type="text" placeholder="Enter your UPI ID" />
                                <span>Amount : ${1010}</span>
                            </div>
                        }
                        {
                            cashType === 'Card' 
                            &&
                            <div className='DeliveryDetailsContainer'>
                                <input type="text" placeholder="Enter your card number" />
                                <span>Amount : ${1010}</span>
                            </div>
                        }
                    </div>
                </div>
                <div className='PaymentButtonContainer'>
                    <button className='ButtonStyle'>
                        Cancel Order
                    </button>
                    {/* disabled place button */}
                    <button className='ButtonStyle' disabled={true}>
                        Place Order
                    </button>
                </div>
            </div>
        </div>
      </div>
      <div className='ShippingContainer'>
          <h3>Shipping</h3>
          <div className='ShippingOptionsContainer'>
              <button 
                  className={shippingOption === 'Order History' ? 'ShipOptionActive' : 'ButtonStyle'}
                  onClick={() => setShippingOption('Order History')}
              >
                  Order History
              </button>
              <button 
                  className={shippingOption === 'Item Details' ? 'ShipOptionActive' : 'ButtonStyle'}
                  onClick={() => setShippingOption('Item Details')}
              >
                  Item Details
              </button>
              <button 
                  className={shippingOption === 'Shipping Details' ? 'ShipOptionActive' : 'ButtonStyle'}
                  onClick={() => setShippingOption('Shipping Details')}
              >
                  Shipping Details
              </button>
              <button
                  className={shippingOption === 'Payment Details' ? 'ShipOptionActive' : 'ButtonStyle'}
                  onClick={() => setShippingOption('Payment Details')}
              >
                  Payment Details
              </button>
          </div>
          {
              shippingOption === 'Order History' 
              &&
              <div className='OrderHistoryContainer'>
                  <h4>Order History</h4>
                  <div className='OrderHistoryDetailsContainer'>
                      <div className='OrderHistoryDetails'>
                          <span>Order ID: 123456</span>
                          <span>Order Date: 01/01/2023</span>
                          <span>Payment Status: Paid</span>
                          <span>Order Status: Shipped</span>
                      </div>
                      <div className='OrderHistoryDetails'>
                          <span>Order ID: 123456</span>   
                          <span>Order Date: 01/01/2023</span>
                          <span>Payment Status: Paid</span>
                          <span>Order Status: Shipped</span>
                      </div>
                  </div>
              </div>
          }
          {
              shippingOption === 'Item Details' 
              &&
              <div className='OrderHistoryContainer'>
                  <h4>Item Details</h4>
                  <div className='OrderHistoryDetailsContainer'>
                      <div className='OrderHistoryDetails'>
                          <span>Item 1</span>
                          <span>Item 2</span>
                          <span>Item 3</span>
                          <span>Item 4</span>
                      </div>
                  </div>
              </div>
          }
          {
              shippingOption === 'Shipping Details' 
              &&
              <div className='OrderHistoryContainer'>
                  <h4>Shipping Details</h4>
                  <div className='OrderHistoryDetailsContainer'>
                      <div className='OrderHistoryDetails'>
                          <span>Address 1</span>
                          <span>Address 2</span>
                          <span>Address 3</span>
                          <span>Address 4</span>
                      </div>
                  </div>
              </div>
          }
          {
              shippingOption === 'Payment Details' 
              &&
              <div className='OrderHistoryContainer'>
                  <h4>Payment Details</h4>
                  <div className='OrderHistoryDetailsContainer'>
                      <div className='OrderHistoryDetails'>
                          <span>Payment Method: Cash on Delivery</span>
                          <span>Amount: ${amount}</span>
                      </div>
                  </div>
              </div>
          }
      </div>
    </div>
  )
}

export default OrderMobile