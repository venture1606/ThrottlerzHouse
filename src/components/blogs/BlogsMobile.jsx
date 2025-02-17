import React, { useState, useRef, useEffect } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

// Importing the datas
import ListItems from '../../assests/data/ListItems.json';

// importing Video
import video1 from '../../assests/images/video1.mp4';

function BlogsMobile() {
    const { blogs } = ListItems;
    const videoRefs = useRef([]);
    const listRef = useRef(null); // Reference for the scrollable container
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    // Function to calculate scroll distance
    const scrollByCards = (numCards) => {
        const cardWidth = 300; // Adjust based on video width (CSS)
        const cardGap = 32; // Adjust based on CSS margin or padding
        return numCards * (cardWidth + cardGap);
    };

    // Scroll left function
    const scrollLeft = () => {
        const distance = scrollByCards(1); // Scroll by 2 videos
        listRef.current.scrollBy({ left: -distance, behavior: 'smooth' });
    };

    // Scroll right function
    const scrollRight = () => {
        const distance = scrollByCards(1); // Scroll by 2 videos
        listRef.current.scrollBy({ left: distance, behavior: 'smooth' });
    };

    // Check scroll position to enable/disable buttons
    const checkScroll = () => {
        if (listRef.current) {
            setCanScrollLeft(listRef.current.scrollLeft > 0);
            setCanScrollRight(
                listRef.current.scrollLeft + listRef.current.clientWidth < listRef.current.scrollWidth
            );
        }
    };

    // Attach scroll event listener
    useEffect(() => {
        checkScroll(); // Check on mount
        const scrollElement = listRef.current;
        if (scrollElement) {
            scrollElement.addEventListener('scroll', checkScroll);
        }
        return () => {
            if (scrollElement) {
                scrollElement.removeEventListener('scroll', checkScroll);
            }
        };
    }, []);

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
        <div className='BlogsMobileContainer'>
            <div className="BlogsMobileVideosContainer" ref={listRef}>
                {[video1, video1, video1, video1, video1].map((video, index) => (
                    <video
                        key={index}
                        src={video}
                        width="300px"
                        controls
                        style={{ borderRadius: '10px' }}
                        title='Throttlerz House'
                        onPlay={() => handlePlay(index)}
                    />
                ))}
            </div>
            <div className="BlogsNavigationContainer justify-content-center">
                <button
                    className="BlogNavigationButton ButtonStyle"
                    onClick={scrollLeft}
                    disabled={!canScrollLeft}
                >
                    <Icon icon="iconamoon:arrow-left-2-fill" className="Icon" />
                </button>
                <button
                    className="BlogNavigationButton ButtonStyle"
                    onClick={scrollRight}
                    disabled={!canScrollRight}
                >
                    <Icon icon="iconamoon:arrow-right-2-fill" className="Icon" />
                </button>
            </div>
        </div>
    );
}

export default BlogsMobile;
