import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-2/4">
      <div className="flex justify-center">
        <div className="w-full">
          <div className="flex justify-around">
            {images
              .slice(
                currentIndex,
                currentIndex + (window.innerWidth >= 1024 ? 3 : 1)
              )
              .map((image, index) => (
                <div
                  key={index}
                  className={`w-full h-full flex justify-center items-center transition-opacity duration-500`}
                >
                  <img
                    src={image}
                    alt={`Slide ${index + currentIndex + 1}`}
                    className="object-cover w-48 h-full"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 -translate-y-1/2 left-0 z-10 bg-gray-800/50 text-white rounded-full p-2"
      >
        {"<"}
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -translate-y-1/2 right-0 z-10 bg-gray-800/50 text-white rounded-full p-2"
      >
        {">"}
      </button>
    </div>
  );
};

export default Carousel;
