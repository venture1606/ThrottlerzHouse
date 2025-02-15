import React, { useRef, useEffect } from 'react';

// Importing the styles
import '../../assests/styles/blogs.css';

// Importing the video data
import video1 from '../../assests/images/video1.mp4';

function Blogs() {
    const videoRefs = useRef([]);

    const handlePlay = (index) => {
        // Pause all videos except the one playing
        videoRefs.current.forEach((video, i) => {
            if (video && i !== index) {
                video.pause();
            }
        });

        // Redirect to Instagram after 5 seconds
        setTimeout(() => {
            window.location.href = "https://www.instagram.com/throttlerz_house/";
        }, 6000);
    };

    return (
        <div className="BlogsContainer">
            <div className="BlogsVideosContainer">
                {[200, 220, 240, 220, 200].map((width, index) => (
                    <video
                        key={index}
                        ref={(el) => (videoRefs.current[index] = el)}
                        src={video1}
                        width={width}
                        height={width + 150}
                        allow="encrypted-media"
                        controls
                        title='Throttlerz House'
                        onPlay={() => handlePlay(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Blogs;
