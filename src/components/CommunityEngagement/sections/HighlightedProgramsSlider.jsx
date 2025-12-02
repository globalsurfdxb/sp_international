import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Controller } from 'swiper/modules';
import { assets } from "../../../assets/index"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { engineeringData } from '../data';

const HighlightedProgramsSlider = () => {
  const { expertiseData } = engineeringData;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageSwiper, setImageSwiper] = useState(null);
  const [contentSwiper, setContentSwiper] = useState(null);

  return (
    <section className="relative pt-text90 pb25 bg-primary text-white overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[519px] h-[725px]"><img src={assets.mainShape} alt="" /></div>
      <div className="container">
        {/* Header */}
        <div className="mb-50px">
          <h2 className="text-60 font-light leading-[1.166666666666667] mb-3 xl:mb-5">
            {expertiseData.title}
          </h2> 
        </div>

        {/* Swiper Slider */}
        <div className="relative">
          <div className="flex flex-col lg:flex-row gap-6 xl:gap-16 2xl:gap-[80px] lg:items-center">
            {/* Image Section - Swiper */}
            <div className="order-2 lg:order-1 lg:w-[50%] 2xl:w-[57.3%]">
              <Swiper
                modules={[Navigation, Pagination, Autoplay, Controller]}
                spaceBetween={50}
                slidesPerView={1}
                speed={700}
                autoplay={{
                  delay: 7000,
                  disableOnInteraction: false,
                }}
                loop={true}
                controller={{ control: contentSwiper }}
                onSwiper={setImageSwiper}
                onSlideChange={(swiper) => {
                  setCurrentSlide(swiper.realIndex);
                }}
                className="expertise-swiper"
              >
                {expertiseData.items.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative overflow-hidden shadow-2xl">
                      <img src={item.img} alt={item.mainTitle} className="w-full h-[300px] xl:h-[576px]  object-cover" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Content Section - Static with Navigation */}
            <div className="order-1 lg:order-2 lg:pt-10 lg:w-[45%] 2xl:w-[37.5%]">
              {/* Navigation - Fixed */}
              <div className="flex items-center gap-4  border-b border-white/20 pb-4 2xl:pb-8 lg:pb-6 mb-4 lg:mb-6 2xl:mb-8">
                <button onClick={() => imageSwiper?.slidePrev()}
                  className="cursor-pointer w-10 xl:w-50px xl:h-50px h-10 rounded-full border border-white/20 flex items-center justify-center transition-colors"
                  aria-label="Previous slide"
                >
                  <img src={assets.arrowLeft2} alt="" />
                </button>
                <button onClick={() => imageSwiper?.slideNext()}
                  className="cursor-pointer w-10 xl:w-50px xl:h-50px h-10 rounded-full border border-white/20 flex items-center justify-center transition-colors"
                  aria-label="Next slide"
                >
                  <img src={assets.arrowRight2} alt="" />
                </button>
                <span className="text-19 leading-[1.473684210526316] ml-2">
                  {String(currentSlide + 1).padStart(2, '0')}/{String(expertiseData.items.length).padStart(2, '0')}
                </span>
              </div>

              {/* Dynamic Content - Swiper */}
              <Swiper
                modules={[Autoplay, Controller]}
                spaceBetween={50}
                slidesPerView={1}
                speed={700}
                autoplay={{
                  delay: 7000,
                  disableOnInteraction: false,
                }}
                loop={true}
                controller={{ control: imageSwiper }}
                onSwiper={setContentSwiper}
                allowTouchMove={false}
                className="content-swiper w-full"
              >
                {expertiseData.items.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div>
                      <h3 className="text-29 leading-[1.344827586206897] font-light mb-6">
                        {item.mainTitle}
                      </h3>
                      <p className="text-white/80 text-19 leading-[1.473684210526316] font-light xl:mb-8">
                        {item.mainDesc}
                      </p>

                      {/* Services */}
                      
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightedProgramsSlider;