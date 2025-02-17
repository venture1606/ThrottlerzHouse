import React from "react";

const StarRating = ({ rating }) => {
    const stars = Array.from({ length: 5 }, (_, i) => {
        const fillPercentage = Math.max(0, Math.min(1, rating - i)); // Each star gets its own fill percentage

        return (
            <svg
                key={i}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id={`grad${i}`} x1="0" y1="0" x2="1" y2="0">
                        <stop offset={`${fillPercentage * 100}%`} stopColor="gold" />
                        <stop offset={`${fillPercentage * 100}%`} stopColor="grey" />
                    </linearGradient>
                </defs>
                <path
                    fill={`url(#grad${i})`}
                    stroke="black"
                    strokeWidth="1"
                    d="M12 2l3.09 6.26 6.91 1-5 4.87 1.18 6.87L12 17.77 6.82 21l1.18-6.87-5-4.87 6.91-1L12 2z"
                />
            </svg>
        );
    });

    return <div style={{ display: "flex", gap: "2px" }}>{stars}</div>;
};

export default StarRating;
