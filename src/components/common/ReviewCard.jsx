import React from 'react'

// importing components
import StarRating from './StarRating'



// importing styles
import '../../assests/styles/review.css'

// importing images
import reviewUser from '../../assests/images/reviewUser.jpg'

function ReviewCard({ data }) {

  return (
    <div className='ReviewCardContainer'>
        <div className='DetailsContainer'>
            <img src={data.img}/>
            <span>{data.name}</span>
        </div>
        <div className='ReviewContentContainer'>
            <div className='StarRating'> {/* style at card.css */}
                <span><StarRating rating={data.rating} /> {data.rating}</span>
                <span>{data.date}</span>
            </div>
            <div className='ReviewContent'>
                <p>
                    {data.review}
                </p>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard