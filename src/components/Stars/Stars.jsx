// src/Stars.jsx
import React, { useEffect, useState } from 'react';
import './Stars.scss';

const generateStar = () => {
    const size = Math.random() * 3 + 1; // Star size between 1 and 4 px
    const left = Math.random() * 100; // Percentage from 0% to 100%
    const top = Math.random() * 100; // Percentage from 0% to 100%
    const duration = Math.random() * 20 + 10; // Duration between 10s and 30s

    return { size, left, top, duration };
};

const Stars = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const generateStars = () => {
            const newStars = [];
            for (let i = 0; i < 100; i++) {
                newStars.push(generateStar());
            }
            setStars(newStars);
        };

        generateStars(); // Initial generation of stars

        // Re-generate stars at random intervals
        const intervalId = setInterval(generateStars, 20000); // Regenerate stars every 20 seconds

        // Cleanup on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="stars">
            {stars.map((star, index) => (
                <div
                    key={index}
                    className="star"
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        left: `${star.left}%`,
                        top: `${star.top}%`,
                        animationDuration: `${star.duration}s`,
                    }}
                ></div>
            ))}
        </div>
    );
};

export default Stars;
