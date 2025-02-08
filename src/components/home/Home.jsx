import React from 'react';
import Lottie from 'react-lottie';
import Advertisment from '../../assests/images/check.png';

// Importing the styles
import '../../assests/styles/home.css';

// importing the Lottie Animation
import Bike from '../../assests/data/Bike2.json'

function Home() {

  const BikeAnimation = {
      loop: true,
      autoplay: true,
      animationData: Bike,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      }
    }

  return (
    <div className="HomeContainer">
      <div className="HomeLeftContainer">
        <div className='HomeTitle'>
          <h3>Throttlerz<br/>House</h3>
          <div className='BikeAnimation'>
            <Lottie options={BikeAnimation} height={400} width={600}/>
          </div>
        </div>
        <p className='HomeDescription'>
          This website is about so and so. We are a group of people who love to ride bikes and we are here to share our experiences with you. We have a lot of products and blogs that you can check out. We also have a lot of social media platforms where you can follow us. So, what are you waiting for? Join us now!
        </p>
      </div>
      <div className="HomeRightContainer">
        {/* <img src={Advertisment} alt="Advertisment" /> */}
      </div>
    </div>
  );
}

export default Home;
