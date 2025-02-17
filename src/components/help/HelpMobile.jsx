import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react/dist/iconify.js'

// import images
import Logo from '../../assests/images/Logo.png'

function HelpMobile() {

  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleNavigate = (path, scrollToSection) => {
    navigate(path, { state: { scrollTo: scrollToSection } });
  }

  return (
    <div className='AddressContainer'>
      <div className='HelpMobileContainer'>
        <div className='HelpLogoContainer'>
          <img src={Logo} alt='Logo' className='HelpLogoImage'/>
          <span>
            This company is a bike shop that provides services like buying, selling, renting, and repairing bikes. We are committed to offering quality products and excellent customer service. For more information, contact us at
          </span>
        </div>
        <div className='QuickLinksContainer'>
          <h3>QUICK LINKS</h3>
          <span onClick={() => handleNavigate('home')}>HOME</span>
          <span onClick={() => navigate('/product')}>PRODUCTS</span>
          <span onClick={() => handleNavigate('blogs')}>BLOGS</span>
          <span onClick={() => handleNavigate('productHome')}>CATEGORY</span>
          <span onClick={() => handleNavigate('help')}>ABOUT US</span>
          <span onClick={() => navigate('/cart')}>CART</span>
        </div>
        <div className='ServicesContainer'>
          <h3>SERVICES</h3>
          <span>BUYING AND SELLING BIKES</span>
          <span>RENTING BIKES</span>
          <span>REPAIRING BIKES</span>
          <span>DELIVERY</span>
        </div>
        <div className='ContactContainer'>
          <h3>CONTACT</h3>
          <div className='ContactDetailsContainer'>
            <Icon icon="line-md:phone-call-loop" className='Icon'/>
            <span>+91 82488 97561</span>
          </div>
          <div className='ContactDetailsContainer'>
            <Icon icon="line-md:email" className='Icon'/>
            <span>throttlerzhouse@gmail.com</span>
          </div>
          <div className='ContactDetailsContainer'>
            <Icon icon="line-md:my-location-loop" className='Icon'/>
            <span>THROTTLERZ HOUSE,<br/> No: 27, <br/>Teacher’s colony, <br/>Moolakadai,  Chennai, <br/>Tamil Nadu 600118</span>
          </div>
        </div>
      </div>
       <div className='FooterContact'>
          <div className='Social-Media-Icon'>
            <ul className='wrapper'>
              <li className="icon Instagram">
                <span className="tooltip">Instagram</span>
                <Icon className='IconStyle' icon="hugeicons:instagram" />
              </li>
              <li className="icon Facebook">
                <span className="tooltip">Facebook</span>
                <Icon className='IconStyle' icon="line-md:facebook"  />
              </li>
              <li className="icon Twitter">
                <span className="tooltip">Twitter</span>
                <Icon className='IconStyle' icon="line-md:twitter" />
              </li>
            </ul>
          </div>
          <div className='TextFooter'>
            <span>© 2023 Bike Shop. All rights reserved.</span>
            <text>Together, let's turn up the sunshine!</text>
            <button onClick={() => setShowModal(true)}>Terms and Conditions | Privacy Policy</button>
          </div>
        </div>
  
        {/* Modal */}
        {showModal && (
          <div className="modal fade show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header TermsAndConditions TermsAndConditionsHeader">
                  <h5 className="modal-title">Terms and Conditions</h5>
                  <button type="button" className="close" onClick={() => setShowModal(false)} aria-label="Close">
                    <span aria-hidden="true"><Icon icon="line-md:close-circle" /></span>
                  </button>
                </div>
                <div className="modal-body TermsAndConditions">
                  <h2>Terms and Conditions</h2>

                  <p><strong>Effective Date:</strong> [Insert Date]</p>

                  <p>Welcome to Throttlerz House! By accessing and using our website and services, you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully before proceeding.</p>

                  <h3>1. General Information</h3>
                  <p>Throttlerz House provides an online platform for buying, selling, renting, and repairing bikes. By using our services, you acknowledge that:</p>
                  <ul>
                    <li>You are at least 18 years old or have legal guardian consent.</li>
                  </ul>

                  <h3>2. User Responsibilities</h3>
                  <p>When using our website, you agree to:</p>
                  <ul>
                    <li>Provide accurate and up-to-date information when creating an account or making a purchase.</li>
                    <li>Maintain the confidentiality of your account details.</li>
                    <li>Avoid any misuse of our website, including fraudulent transactions or providing false information, which may result in account suspension.</li>
                  </ul>

                  <h3>3. Product and Service Policies</h3>
                  <p>Our product and service policies include:</p>
                  <ul>
                    <li>All product listings, descriptions, and prices are subject to change without prior notice.</li>
                    <li>Orders are processed based on availability. If a product is out of stock, we will notify you with possible alternatives or a refund option.</li>
                    <li>Rental services require valid identification and security deposits. Any damage during the rental period is the responsibility of the user.</li>
                  </ul>

                  <h3>4. Payments and Refunds</h3>
                  <p>Our payment and refund policies include:</p>
                  <ul>
                    <li>We accept various payment methods, including credit/debit cards, UPI, and net banking.</li>
                    <li>Refunds will only be issued for eligible returns as per our Return Policy.</li>
                    <li>Refunds may take 7-10 business days to process.</li>
                  </ul>

                  <h3>5. Liability and Warranty</h3>
                  <p>Throttlerz House holds no liability for:</p>
                  <ul>
                    <li>Damages, injuries, or losses resulting from the use of our products and services.</li>
                    <li>Warranty claims, which must be processed as per the manufacturer's policies.</li>
                  </ul>

                  <h3>6. Privacy Policy</h3>
                  <p>We are committed to protecting your privacy:</p>
                  <ul>
                    <li>Your personal data is collected and used in accordance with our Privacy Policy.</li>
                    <li>We do not sell or share your personal information with third parties without consent.</li>
                  </ul>

                  <p>By using our services, you agree to these Terms and Conditions. For queries, contact us at <strong>throttlerzhouse@gmail.com</strong>.</p>

                </div>
                <div className="modal-footer TermsAndConditions">
                  <button type="button" className="btn btn-secondary TermsAndConditions" onClick={() => setShowModal(false)}>Close</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal Background Overlay */}
        {showModal && <div className="modal-backdrop fade show" onClick={() => setShowModal(false)}></div>}
    </div>
  )
}

export default HelpMobile