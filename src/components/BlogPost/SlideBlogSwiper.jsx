import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./BlogPost.css";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router";
import { blogpostData } from "../../constants/BlogpostData";

export const SlideBlogSwiper = () => {
  // length limited
  const handelLimitText = (text, maxlength) => {
    return text.length > maxlength ? text.slice(0, maxlength) + "..." : text;
  };
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      grabCursor={true}
      // pagination={{ clickable: true }}
      navigation={true}
      keyboard={{ enabled: true }}
      scrollbar={{ draggable: true }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      modules={[Keyboard, Scrollbar, Navigation, Pagination]}
      className="blog-swiper"
    >
      {blogpostData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="blog-item">
            <div className="blog-img">
              <Link to={`/blog/${item.id}`}>
                <img src={item.img} alt={item.title} />
              </Link>
            </div>
            <div className="blog-info">
              <span>{item.date}</span> | <span>by {item.author}</span>
            </div>
            <Link to={`/blog/${item.id}`} className="blog-link">
              <h2>{item.title}</h2>
            </Link>

            <p>{handelLimitText(item.description, 80)}</p>
            <Link to={`/blog/${item.id}`} className="blog-link">
              Read More...
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
