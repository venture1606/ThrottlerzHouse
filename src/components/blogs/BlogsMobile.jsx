import React, { useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

// Importing the datas
import ListItems from '../../assests/data/ListItems.json'

function BlogsMobile() {

  const { blogs } = ListItems;
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current card index
  
  const scrollUp = () => {
      if (currentIndex > 0) {
          setCurrentIndex((prevIndex) => prevIndex - 1); // Move to the previous card
      }
  };

  const scrollDown = () => {
      if (currentIndex < blogs.length - 1) {
          setCurrentIndex((prevIndex) => prevIndex + 1); // Move to the next card
      }
  };

  return (
    <div className='BlogsMobileContainer'>
      <div className='BlogsMobileDetailsContainer'>
        <div className='BlogsMobileVideosContainer BlogsVideosContainer'>
          {blogs.length > 0 && (
              <iframe
                  src={blogs[currentIndex].src} // Render the current iframe
                  width="100%"
                  height="570"
                  allow="autoplay; encrypted-media"
                  style={{
                    border: 'none', 
                    borderRadius: '10px',
                    scrollbarWidth: 'none',
                    overflowY: 'hidden !important',
                    overflowX: 'hidden !important',
                    
                  }}
                  title={`Instagram Reel ${currentIndex + 1}`}
              />
          )}
        </div>
        <div className="BlogsNavigationContainer justify-content-center">
          <button
              className="BlogNavigationButton ButtonStyle"
              onClick={scrollUp}
              disabled={currentIndex === 0} // Disable when at the first card
          >
              <Icon icon="iconamoon:arrow-up-2-fill" className="Icon" />
          </button>
          <button
              className="BlogNavigationButton ButtonStyle"
              onClick={scrollDown}
              disabled={currentIndex === blogs.length - 1} // Disable when at the last card
          >
              <Icon icon="iconamoon:arrow-down-2-fill" className="Icon" />
          </button>
        </div>
      </div>
      <div className='BlogsDetailsContainer'>
        <div className='SocialMediaDetails'>
          <Icon icon="line-md:instagram" className='SocialMediaIcon' style={{color: "#d12d79"}} />
          Instagram
        </div>
        <div className='SocialMediaDetails'>
          <Icon icon="line-md:youtube" className='SocialMediaIcon' style={{color: "#ff0000"}} />
          YouTube
        </div>
        <div className='SocialMediaDetails'>
          <Icon icon="line-md:facebook" className='SocialMediaIcon' style={{color: "#3b5998"}} />
          Facebook
        </div>
        <div className="SocialMediaDetails">
          <Icon icon="line-md:twitter" className="SocialMediaIcon" style={{ color: "#1da1f2" }} />
          Twitter
        </div>
      </div>
    </div>
  )
}

export default BlogsMobile