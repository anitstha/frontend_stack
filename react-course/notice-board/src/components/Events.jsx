import React from "react";
import { FaCalendarAlt, FaQrcode } from "react-icons/fa";

const events = [
  {
    date: "OCT 15",
    title: "Annual Science Fair",
    time: "10:00 AM",
    location: "Main Assembly Hall",
    isActive: true,
  },
  {
    date: "OCT 17",
    title: "Jazz Band Concert",
    time: "06:30 PM",
    location: "Arts Center",
  },
  {
    date: "OCT 18",
    title: "Parent-Teacher Night",
    time: "05:00 PM",
    location: "Classrooms",
  },
  {
    date: "OCT 20",
    title: "Homecoming Dance",
    time: "08:00 PM",
    location: "Gymnasium",
  },
  {
    date: "OCT 22",
    title: "Debate Club Finals",
    time: "03:30 PM",
    location: "Lecture Hall B",
  },
];

const Events = () => {
  return (
    <div className="w-full h-full p-10 flex items-center justify-center font-sans">
      <div className="w-full max-w-2xl h-full rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col border border-orange-50/50">
        {/* Header Section */}
        <div className="p-10 pb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-white p-3 rounded-2xl shadow-sm border border-orange-100">
              <FaCalendarAlt className="text-[#FF3B30] text-3xl" />
            </div>
            <div>
              <h2 className="text-[#1C1C1E] font-bold text-3xl tracking-tight">
                Upcoming Events
              </h2>
              <p className="text-slate-400 text-sm font-medium mt-0.5">
                School Notice Board
              </p>
            </div>
          </div>
          <span className="text-[#FF453A] text-xs font-bold bg-[#FFE9E8] px-5 py-2.5 rounded-full tracking-widest border border-[#FF3B30]/10">
            NEXT 7 DAYS
          </span>
        </div>

        {/* Events List */}
        {/* Added 'hide-scrollbar' class for a cleaner look on static displays */}
        <div className="flex-1 px-8 space-y-6 overflow-y-auto pt-2 hide-scrollbar">
          {events.map((event, index) => (
            <div
              key={index}
              className="relative flex items-center gap-6 bg-white rounded-[1.5rem] p-5 shadow-[-10px_0px_20px_-5px_rgba(0,0,0,0.06)] border-y border-r border-slate-50 transition-transform duration-300"
            >
              {/* Highlight bar for the most recent/active event */}
              {event.isActive && (
                <div className="absolute left-0 top-5 bottom-5 w-1.5 bg-[#FF3B30] rounded-r-full shadow-[2px_0_8px_rgba(255,59,48,0.3)]" />
              )}

              {/* Date Badge */}
              <div className="flex-shrink-0 w-20 h-20 bg-[#F1F5F9] rounded-2xl flex flex-col items-center justify-center border border-white">
                <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-tighter">
                  {event.date.split(" ")[0]}
                </span>
                <span className="text-3xl font-black text-[#1C1C1E] leading-none">
                  {event.date.split(" ")[1]}
                </span>
              </div>

              {/* Event Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-[#1C1C1E] font-bold text-xl mb-1 truncate">
                  {event.title}
                </h3>
                <div className="flex items-center gap-2 text-slate-500 text-lg font-medium">
                  <span>{event.time}</span>
                  <span className="opacity-30">•</span>
                  <span className="truncate">{event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Sync Section */}
        <div className="p-10 mt-auto">
          <div className="bg-white border border-slate-100 rounded-[1.5rem] p-6 flex items-center gap-6 shadow-[-6px_6px_15px_rgba(0,0,0,0.03)]">
            <div className="p-4 bg-red-50 rounded-2xl">
              <FaQrcode className="text-[#FF3B30] text-3xl" />
            </div>
            <div>
              <p className="text-[#1C1C1E] text-lg font-bold leading-tight">
                Scan to sync school calendar
              </p>
              <p className="text-slate-400 text-sm font-medium mt-1">
                Keep track of all events on your mobile device
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Global CSS to hide scrollbars while maintaining functionality */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Events;
