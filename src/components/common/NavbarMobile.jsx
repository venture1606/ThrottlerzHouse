import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import Lottie from 'react-lottie';
import { useNavigate } from 'react-router-dom';


// Importing files
import SearchBar from '../common/SearchBar';

// Importing the documents
import Logo from '../../assests/images/Logo.png';
import Bike from '../../assests/data/Bike.json';

function NavbarMobile({ onNavigate }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const BikeAnimation = {
    loop: true,
    autoplay: true,
    animationData: Bike,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleClick = (index) => {
    setActiveIndex(index);
    console.log(index);
  };

  const handleNavigate = (path, scrollToSection) => {
    navigate(path, { state: { scrollTo: scrollToSection } });
  };

  const icons = [
    { icon: "proicons:home", onClick: () => handleNavigate('/', 'home') },
    { icon: "mynaui:shopping-bag", onClick: () => navigate('/category') },
    { icon: "material-symbols:media-link-outline-rounded", onClick: () => handleNavigate('/', 'productHome') },
    { icon: "iconamoon:category-light", onClick: () => handleNavigate('/', 'blogs') },
    { icon: "mdi:help-outline", onClick: () => handleNavigate('/', 'help') },
    { icon: "solar:login-outline", onClick: () => navigate('/login') },
    { icon: "ic:baseline-whatsapp", onClick: () => window.open('https://wa.me/918248897561', '_blank') },
  ];

  return (
    <div>
      <div className='NavbarTopMobileContainer'>
        <div className="NavbarTopMobileLogoContainer">
          <img src={Logo} alt="logo" />
          <Lottie options={BikeAnimation} height={50} width={120} />
        </div>
        <div className="SearchContainer">
          <Icon icon="material-symbols:search-rounded" onClick={() => setShowPopup(true)} className="SearchIcon" />
          {showPopup && <SearchBar onClose={() => setShowPopup(false)} />}
          <Icon icon="icon-park-outline:like" className="SearchIcon" onClick={() => navigate("/cart")} />
          <Icon icon="solar:user-outline" className="Icon" onClick={() => navigate("/login")} />
        </div>
      </div>
      <div className='NavbarMobileContainer'>
        {icons.map((item, index) => (
          <div
            key={index}
            className={`NavbarMobileLogoContainer cursor-pointer ${
              activeIndex === index ? 'NavbarMobileSelected' : ''
            }`}
            onClick={() => {
              handleClick(index);
              item.onClick();
            }}
          >
            <Icon icon={item.icon} className='Icon' />
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default NavbarMobile;
