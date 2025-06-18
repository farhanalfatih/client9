import React from 'react';
import sasasa from '../assets/ayaka.mp4'; // Adjust the path to your video file as needed

const VideoBanner = () => {
  return (
    <div className="relative h-[90vh] overflow-hidden"> {/* Using h-[90vh] for precise value */}
    <video src={sasasa} 
    className="absolute size-full object-cover object-[10%_30%]"
        oop
        autoPlay
        muted
        playsInline
        preload="none" ></video>


      {/* Gradient Overlay from transparent to white at the bottom */}
      <div className="absolute h-full w-full bg-gradient-to-b from-transparent to-white"></div>

      {/* Left Bottom Glowing Orb */}
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] -translate-x-1/2 translate-y-1/2 rounded-full bg-white blur-3xl" // Using px values for size-100 equivalent
      ></div>

      {/* Right Bottom Glowing Orb */}
      <div
        className="absolute right-0 bottom-0 w-[400px] h-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-white blur-3xl" // Using px values for size-100 equivalent
      ></div>

      {/* You can add more content here that sits on top of the video and overlays,
          e.g., a title, buttons, etc. Make sure it has a higher z-index if needed. */}
      <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-white p-4">
      </div>
    </div>
  );
};

export default VideoBanner;