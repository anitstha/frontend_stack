import React from "react";

const Card = () => {
  const notice = [
    {
      img: "https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg",
      title: "Sports Day",
      date: "Tomorrow at 9:00 AM",
      location: "Futsal Ground",
    },
    {
      img: "https://images.pexels.com/photos/35108646/pexels-photo-35108646.jpeg",
      title: "Annual Science Fair",
      date: "March 5 at 10:00 AM",
      location: "Auditorium",
    },
    {
      img: "https://images.pexels.com/photos/8055860/pexels-photo-8055860.jpeg",
      title: "Parent-Teacher Meeting",
      date: "March 7 at 2:00 PM",
      location: "Conference Hall",
    },
    // {
    //   img: "https://images.pexels.com/photos/297394/pexels-photo-297394.jpeg",
    //   title: "Art Exhibition",
    //   date: "March 10 at 11:00 AM",
    //   location: "Art Gallery",
    // },
  ];

  return (
    <div className="flex">
      {notice.map((elem, index) => (
        <div
          key={index}
          className="m-4 shadow-xl rounded-xl flex flex-col sm:flex-row items-center sm:items-start px-4 py-4 gap-4 border-l-4 border-pink-700 bg-white"
          id="card"
        >
          {/* Image */}
          <img
            className="h-32 w-38 rounded-xl object-cover"
            src={elem.img}
            alt={elem.title}
          />

          {/* Text content */}
          <div className="flex-1 leading-7 text-center sm:text-left">
            <h1 className="text-lg sm:text-xl font-bold text-gray-900">
              {elem.title}
            </h1>
            <h3 className="text-gray-500 text-sm sm:text-base">{elem.date}</h3>
            <h3 className="text-pink-700 font-semibold text-sm sm:text-base">
              {elem.location}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
