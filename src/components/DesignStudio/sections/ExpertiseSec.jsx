import H2Title from "../../common/H2Title";
import { assets } from "../../../assets/index";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Controller } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const ExpertiseSec = ({data}) => {
  const [swiperRef, setSweiperRef] = useState(null)
  return (
    <section className="relative pt-text90 pb25 bg-primary text-white overflow-hidden">
      <div className="container">
        <div className="flex justify-between mb-3 lg:mb-6 xl:mb-50px ">
          <H2Title titleText="Our Expertise" />
          {/* Navigation - Fixed */}
          <div className="flex items-center gap-4 ">
            <button onClick={() => swiperRef?.slidePrev()}
              className="w-[35px] h-[35px] xl:w-[50px] xl:h-[50px] rounded-full border border-white/20 flex items-center justify-center transition-colors"
              aria-label="Previous slide"
            >
              <img src={assets.arrowLeft2} width={13.89} height={13.89} alt="" className="w-[13.89px] h-[13.89px] xl:w-5 xl:h-5" />
            </button>
            <button onClick={() => swiperRef?.slideNext()}
              className="w-[35px] h-[35px] xl:w-[50px] xl:h-[50px] rounded-full border border-white/20 flex items-center justify-center transition-colors"
              aria-label="Next slide"
            >
              <img src={assets.arrowRight2} width={13.89} height={13.89} alt="" className="w-[13.89px] h-[13.89px] xl:w-5 xl:h-5" />
            </button>
            
          </div>
          </div>
          <div>
            <Swiper 
            modules={[Navigation, Pagination, Autoplay, Controller]}
            spaceBetween={40}
            slidesPerView={1}
            speed={700}
            onSwiper={setSweiperRef}
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={
              {
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }
            }
            className="expertise-swiper !overflow-visible"
            >
              {data.items.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="relative overflow-hidden ">
                    <img src={item.img} alt={item.slideTitle} className="w-full h-[250px] lg:h-[300px] xl:h-[333px]  object-cover" />
                    <div className="pl-0 pt-4 xl:p-10 xl:border-l border-white/30">
                      <h3 className="text-20 xl:text-29 leading-[1.2] 3xl:leading-[1.724137931034483] font-normal xl:font-extralight mb-2 xl:mb-2">{item.slideTitle}</h3>
                      <p className="text-19 leading-[1.526315789473684] font-extralight">{item.slideDesc}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
    </section>
  );
}

export default ExpertiseSec;