import React from 'react'
import Lottie from 'react-lottie';

// Importing the assets
import Advertisment from '../../assests/images/check.png';

// Importing the styles
import '../../assests/styles/home.css';

// importing the Lottie Animation
import Bike from '../../assests/data/Bike2.json'

function HomeMobile() {

  const BikeAnimation = {
    loop: true,
    autoplay: true,
    animationData: Bike,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    }
  }

  return (
    <div className='HomeMobileContainer'>
      <div className='HomeTitleMobile'>
        <h3>Throttlerz<br/>House</h3>
        <div className='BikeAnimationMobile'>
          <Lottie options={BikeAnimation} height={280} width={300}/>
        </div>
      </div>
      <div className='AdvertisementMobile'>
        <div className="HomeRightMobileContainer">
          {/* <img src={Advertisment} alt="Advertisment" /> */}
        </div>
      </div>
    </div>
  )
}

export default HomeMobile