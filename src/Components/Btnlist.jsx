import React, { useRef } from "react";
import Button from "./Button";
import { useSelector } from "react-redux";

const List = [
  "All",
  "Media",
  "Stream",
  "Audio",
  "DataStructure",
  "Podcast",
  "Movies",
  "DataScience",
  "Development",
  "MediaQuery",
  "ListEvent",
  "Thoughts",
];

const Btnlist = () => {
  const scrollRef = useRef(null);
  const ismenuopen=useSelector(store=>store.app.isOpen)

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className={`relative flex items-center transition-all duration-300 ${
        ismenuopen ? "w-[85vw]" : "w-screen"
      }`}>
      {/* Left arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 z-10 h-full px-2 bg-linear-to-r from-white to-transparent"
      >
        <span className="text-2xl font-bold">‹</span>
      </button>

      {/* Scrollable button container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll scrollbar-hide whitespace-nowrap scroll-smooth px-8"
      >
        {List.map((item, index) => (
          <Button key={index} name={item} />
        ))}
      </div>

      {/* Right arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-0 z-10 h-full px-2 bg-linear-to-l from-white to-transparent"
      >
        <span className="text-2xl font-bold">›</span>
      </button>
    </div>
  );
};

export default Btnlist;
