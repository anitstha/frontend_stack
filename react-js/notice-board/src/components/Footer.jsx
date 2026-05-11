import React from "react";

const Footer = () => {
  return (
    <div className="absolute bottom-0 h-20 w-full bg-pink-700 overflow-hidden flex items-center">
      {/* Smooth scrolling wrapper */}
      <div className="flex animate-scrollLeft whitespace-nowrap">
        {/* Original content */}
        <span className="text-white text-lg mx-8">
          © 2026 Your College. All Rights Reserved. Stay updated with our
          events!
        </span>
        <span className="text-white text-lg mx-8">
          Sports Day on March 1 | Science Fair on March 5 | Art Exhibition on
          March 10
        </span>
        <span className="text-white text-lg mx-8">
          Contact: info@college.edu | Phone: +977-1-2345678
        </span>

        {/* Duplicate content for seamless loop */}
        <span className="text-white text-lg mx-8">
          © 2026 Your College. All Rights Reserved. Stay updated with our
          events!
        </span>
        <span className="text-white text-lg mx-8">
          Sports Day on March 1 | Science Fair on March 5 | Art Exhibition on
          March 10
        </span>
        <span className="text-white text-lg mx-8">
          Contact: info@college.edu | Phone: +977-1-2345678
        </span>
      </div>

      {/* Tailwind custom animation */}
      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scrollLeft {
          display: flex;
          animation: scrollLeft 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Footer;
