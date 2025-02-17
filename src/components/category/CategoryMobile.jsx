import React from 'react'
import { useNavigate } from 'react-router-dom'

// importing components
import Card from '../common/Card'

// importing data
import ListItems from '../../assests/data/ListItems.json'

function CategoryMobile() {

    const navigate = useNavigate();
    const { cards } = ListItems;

  return (
    <div className='CategoryMobileContainer'>
        <h1>All Categories</h1>
        
        <nav className="navbar CategoryNavbarContainer">
          <div className="navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav d-flex flex-wrap">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="categoryDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Category
                </a>
                <div className="dropdown-menu CategoryMenuContainer" aria-labelledby="categoryDropdown">
                  <a className="dropdown-item MenuContainer" >Accessories</a>
                  <a className="dropdown-item MenuContainer" >Bike for sale</a>
                  <a className="dropdown-item MenuContainer" >Bike products</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="brandDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Brands
                </a>
                <div className="dropdown-menu CategoryMenuContainer" aria-labelledby="brandDropdown">
                  <a className="dropdown-item MenuContainer" >Yamaha</a>
                  <a className="dropdown-item MenuContainer" >Royal Enfield</a>
                  <a className="dropdown-item MenuContainer" >TVS</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="serviceDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Services
                </a>
                <div className="dropdown-menu CategoryMenuContainer" aria-labelledby="serviceDropdown">
                  <a className="dropdown-item MenuContainer" >Painting</a>
                  <a className="dropdown-item MenuContainer" >Full Service</a>
                  <a className="dropdown-item MenuContainer" >Foam Wash</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        
        <div className="CategoryGrid">
            {
                cards.map((card) => (
                    <Card key={card.id} card={card} />
                ))
            }
        </div>
        
        <button className='btn btn-primary' onClick={() => navigate('/product')}>Single Product</button>
    </div>
  )
}

export default CategoryMobile