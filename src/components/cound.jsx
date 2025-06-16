import React from "react";
import "./css.css"; // Import file CSS khusus glow

const CloudBackground = () => {
  const cloudCount = 40;

  // Generate array awan acak
  const clouds = Array.from({ length: cloudCount }, (_, i) => {
    const top = Math.floor(Math.random() * 90); // 0-90vh
    const left = Math.floor(Math.random() * 90); // 0-90vw
    const size = Math.floor(Math.random() * 40) + 20; // 20px - 60px
    const rotate = Math.floor(Math.random() * 20) - 10; // -10 to 10 deg
    const shadow = Math.random() > 0.5 ? "shadow-md" : "shadow-lg";

    return {
      id: i,
      top,
      left,
      size,
      rotate,
      shadow,
    };
  });

  return (
    <div className="relative w-full h-screen  overflow-hidden z-0">
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className={`absolute bg-white rounded-sm ${cloud.shadow} glow-border`}
          style={{
            top: `${cloud.top}vh`,
            left: `${cloud.left}vw`,
            width: `${cloud.size}px`,
            height: `${cloud.size}px`,
            transform: `rotate(${cloud.rotate}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default CloudBackground;
