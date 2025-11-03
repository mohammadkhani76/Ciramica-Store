import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slider2 from "../../../../assets/media/HomeMedia/SliderMedia/main-banner-1.jpg";
import slider1 from "../../../../assets/media/HomeMedia/SliderMedia/main-banner-2.jpg";
import "./Slider.css";

export const slider = [
  {
    name: slider1,
    title: "FLAT 40% DISCOUNT",
    description: " Sage Ceramic Serving",
    des: "Green Bowls",
  },
  {
    name: slider2,
    title: "FLAT 40% DISCOUNT",
    description: " Multipurpose Ceramic ",
    des: "Dotted Kitchen",
  },
];

export const SlideSwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      loop
      style={{ width: "100%" }}
      className="slide-swiper"
    >
      {slider.map((item, i) => (
        <SwiperSlide key={i}>
          <img src={item.name} alt={`slide-${i}`} />
          <div className="slider-details">
            <p>{item.title}</p>
            <h2>
              {item.description} <br />
              {item.des}
            </h2>
            <button>Shop Now</button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
