import { useState } from "react";

const images = [
  "/images/Sam_Masto_Headshot1.jpg",
  "/images/Sam_Masto_Headshot2.jpg",
];

const altTexts = [
  "Sam Masto — actor headshot",
  "Sam Masto — actor headshot (alternate)",
];

function AboutCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="w-full md:w-1/3 mt-8 justify-center aspect-2/3 relative">
      <img
        src={images[currentIndex]}
        alt={altTexts[currentIndex]}
        className="rounded-lg transition-all duration-1000 ease-in-out"
      />
      <div className="flex justify-center mt-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default AboutCarousel;
