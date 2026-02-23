import React from "react";
import '../static/StarEffect.css'

const StarEffect = () => {
  const stars = Array.from({ length: 40 });

  return (
    <div className="stars-container">
      {stars.map((_, i) => {
        const randomX = Math.random() * 100;      // horizontal position
        const randomSpeed = 5 + Math.random() * 5; // duration 5s–10s
        const randomDelay = Math.random() * 5;     // delay 0–5s

        return (
          <span
            key={i}
            className="star"
            style={{
              left: `${randomX}%`,
              animationDuration: `${randomSpeed}s`,
              animationDelay: `${randomDelay}s`
            }}
          ></span>
        );
      })}
    </div>
  );
};

export default StarEffect;
