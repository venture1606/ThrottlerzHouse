import React from 'react'
import Lottie from 'react-lottie'

// importing animation
import LoadingAnimation from '../../assests/data/loading.json'

function Loading() {

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: LoadingAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

  return (
    <div style={
        {
            position: 'fixed',
            top: '45%',
            left: '45%',
            zIndex: '1000'
        }
    }>
        <Lottie options={defaultOptions}
                height={100}
                width={100}
        />
    </div>
  )
}

export default Loading