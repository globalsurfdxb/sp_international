import { Swiper, SwiperSlide} from "swiper/react";
import { Autoplay,Controller } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import H2Title from "../../common/H2Title";
const SectorsSec = ({data}) => {
  return (
    <section className="pt-text30 pb30 overflow-hidden">
      <div className="container">
        <div>
          <H2Title titleText="Sectors We Serve" titleColor="black" marginClass="mb-50px" />
        </div>
        <div>
          <Swiper
          modules={[Autoplay, Controller]}
          spaceBetween={40}
          slidesPerView={1}
          speed={700}
          autoplay={{
            delay: 7000,
            disableOnInteraction: true,
          }}
          loop={true}
          breakpoints={
            {
              0: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 4,
              },
            }
          }
          className="expertise-swiper !overflow-visible"
        >
          {data.items.map((item, index) => (
            <SwiperSlide key={index} className="cursor-grab">
              <div className="relative overflow-hidden border-l border-white/30">
                <div className="w-15 h-15 xl:w-20 xl:h-20 bg-secondary rounded-full flex items-center justify-center mb-5">
                  <img src={item.icon} alt={item.title} className="w-auto h-5 md:h-6 2xl:h-[36px] object-contain" />
                </div>
                <div className="">
                  <h3 className="text-32 leading-[1.3125] font-light mb-2 xl:mb-3">{item.title}</h3>
                  <p className="text-19 leading-[1.526315789473684] font-light">{item.desc}</p>
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

export default SectorsSec;