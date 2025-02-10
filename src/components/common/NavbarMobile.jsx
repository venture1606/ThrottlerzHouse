import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import Lottie from 'react-lottie';
import { useNavigate } from 'react-router-dom';

// Importing files
import ToggleButton from '../common/ToggleButton';

// Importing the documents
import Logo from '../../assests/images/Logo.png';
import Bike from '../../assests/data/Bike.json';

function NavbarMobile({ onNavigate }) {
  const [activeIndex, setActiveIndex] = useState(0);
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

  const icons = [
    { icon: "proicons:home", onClick: () => onNavigate('home') },
    { icon: "mynaui:shopping-bag", onClick: () => navigate('/product') },
    { icon: "material-symbols:media-link-outline-rounded", onClick: () => onNavigate('blogs') },
    { icon: "iconamoon:category-light", onClick: () => onNavigate('products') },
    { icon: "mdi:help-outline", onClick: () => onNavigate('help') },
    { icon: "solar:login-outline", onClick: () => navigate('/login') },
    { icon: "ic:baseline-whatsapp", onClick: () => window.open('https://wa.me/917871269665', '_blank') },
  ];

  return (
    <div>
      <div className='NavbarTopMobileContainer'>
        <div className="NavbarTopMobileLogoContainer">
          <img src={Logo} alt="logo" />
          <Lottie options={BikeAnimation} height={50} width={120} />
        </div>
        <ToggleButton />
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
