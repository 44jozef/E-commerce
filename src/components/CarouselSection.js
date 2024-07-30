import React, { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const CarouselSection = () => {
  const images = [
    { src: "https://sneakernews.com/wp-content/uploads/2017/06/Sneaker-Con-Chicago-2017-Event-Recap-3.jpg"  },
    { src: "https://avatars.mds.yandex.net/i?id=2c82259b37849ef40e03ee2aef878d508f91a7d2efffa9cd-3765781-images-thumbs&n=13"  },
    { src: "https://avatars.mds.yandex.net/i?id=88f3d5480d799132c18f3df1ebe7869c_l-5688986-images-thumbs&n=13"  },
    { src: "https://avatars.mds.yandex.net/i?id=d794238abb9bba9a4f8357b43cc038d3_l-4961046-images-thumbs&n=13"  },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel-container relative overflow-hidden">
      <div
        className="carousel-inner flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
      >
        {images.concat(images.slice(0, 2)).map((image, index) => (
          <div key={index} className="carousel-item w-1/3 relative">
            <img
              src={image.src}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
            <div className="carousel-caption absolute bottom-0 bg-opacity-50 bg-gray-900 text-white p-4 w-full text-center">
              <button className="carousel-button">{image.buttonText}</button>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="carousel-nav-button absolute top-1/2 transform -translate-y-1/2 left-4 bg-gray-800 text-white p-2 rounded-full"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        className="carousel-nav-button absolute top-1/2 transform -translate-y-1/2 right-4 bg-gray-800 text-white p-2 rounded-full"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default CarouselSection;
