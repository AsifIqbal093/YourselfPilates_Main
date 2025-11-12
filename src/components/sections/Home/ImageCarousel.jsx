"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

/**
 * Image Carousel Section
 * Full-width carousel with fade transitions
 */
const ImageCarousel = () => {
  // Carousel images
  const slides = [
    {
      src: "/images/3.jpg",
      alt: "Yourself Pilates Studio - Slide 1",
    },
    {
      src: "/images/5.jpg",
      alt: "Yourself Pilates Studio - Slide 2",
    },
    {
      src: "/images/09.jpg",
      alt: "Yourself Pilates Studio - Slide 3",
    },
    {
      src: "/images/11.jpg",
      alt: "Yourself Pilates Studio - Slide 4",
    },
    {
      src: "/images/12.jpg",
      alt: "Yourself Pilates Studio - Slide 5",
    },
  ];

  return (
    <section className="py-0 bg-white">
      <div className="relative w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          slidesPerView={1}
          spaceBetween={0}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={900}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-custom",
          }}
          className="yoursel-pilates-carousel"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={index === 0}
                />
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Arrows */}
          <div className="swiper-button-prev-custom absolute left-4 md:left-[46%] bottom-8 md:bottom-16 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full cursor-pointer hover:bg-white transition-all duration-200 shadow-lg">
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-[#003b5c]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>

          <div className="swiper-button-next-custom absolute right-4 md:right-[46%] bottom-8 md:bottom-16 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full cursor-pointer hover:bg-white transition-all duration-200 shadow-lg">
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-[#003b5c]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>

          {/* Custom Pagination */}
          <div className="swiper-pagination-custom flex justify-center items-center gap-2 absolute bottom-4 left-0 right-0 z-10" />
        </Swiper>

        <style jsx global>{`
          .yoursel-pilates-carousel {
            border-radius: 0 50px 50px 0;
            overflow: hidden;
          }

          .swiper-pagination-custom .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: white;
            opacity: 0.5;
            transition: all 0.3s;
          }

          .swiper-pagination-custom .swiper-pagination-bullet-active {
            opacity: 1;
            width: 30px;
            border-radius: 5px;
          }

          @media (max-width: 768px) {
            .yoursel-pilates-carousel {
              border-radius: 0;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default ImageCarousel;
