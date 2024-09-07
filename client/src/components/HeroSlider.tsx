// HeroSlider.jsx
import React from "react";
import Slider from "react-slick";

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const slides = [
    {
      title: "Up to 10% off Voucher",
      description: "Shop Now",
      imageUrl:
        "https://www.apple.com/v/iphone-14/g/images/meta/iphone-14_overview__dfr5v8zj1iae_og.png",
    },
    {
      title: "Up to 20% off on Accessories",
      description: "Shop Now",
      imageUrl:
        "https://th.bing.com/th/id/OIP.X_NfK2q-uXuJ8LwnxL0s8QHaEv?rs=1&pid=ImgDetMain",
    },
  ];

  return (
    <div className="w-[100%]">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div className="relative" key={index}>
            <div className="relative bg-black text-white overflow-hidden bg-no-repeat bg-center" style={{backgroundImage: `url(${slide.imageUrl})`}}>
              <div className="container mx-auto px-6 py-16 md:flex md:items-center md:justify-between">
                {/* Text Content */}
                <div className="md:w-1/2">
                  <div className="flex items-center mb-4">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                      alt="Apple Logo"
                      className="h-8 w-8 mr-2"
                    />
                    <span className="text-xl">iPhone 14 Series</span>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-lg mb-8">{slide.description}</p>
                  <a
                    href="#"
                    className="inline-block bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition"
                  >
                    Shop Now →
                  </a>
                </div>

                {/* Image Content */}
                
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
