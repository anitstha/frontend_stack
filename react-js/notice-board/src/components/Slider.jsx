import React from "react";
import { Carousel } from "antd";

export default function Slider() {
  const slides = [
    {
      title: "Welcome Back Students!",
      description: "New semester begins from Sunday.",
      image:
        "https://images.pexels.com/photos/8617994/pexels-photo-8617994.jpeg",
    },
    {
      title: "Sports Week",
      description: "Join the annual sports event.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    },
    {
      title: "Exam Notice",
      description: "Mid-term exams start next week.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
    },
  ];

  return (
    <div className="w-full flex justify-left mx-4 my-8">
      {/* Container to control width */}
      <div className="w-full md:w-4/5 lg:w-3/5 xl:w-[97%]">
        <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={5000}>
          {slides.map((slide, index) => (
            <div key={index}>
              <div className="h-[460px] relative overflow-hidden rounded-xl shadow-lg">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                  }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Content */}
                <div className="absolute bottom-0 p-6 sm:p-10 text-white">
                  <span className="bg-orange-600 px-4 py-1 rounded-full font-semibold">
                    Notice
                  </span>

                  <h2 className="text-2xl sm:text-4xl font-bold mt-3">{slide.title}</h2>

                  <p className="text-sm sm:text-lg mt-2">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}