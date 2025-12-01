// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../../assets/media/HomeMedia/ProductCategoryMedia/cat-1-1.jpg";
import img2 from "../../../../assets/media/HomeMedia/ProductCategoryMedia/cat-2-1.jpg";
import img3 from "../../../../assets/media/HomeMedia/ProductCategoryMedia/cat-3-1.jpg";
import img4 from "../../../../assets/media/HomeMedia/ProductCategoryMedia/cat-4-1.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./ProductsDetails.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";

export const ProductsDetailsSwiper = ({ images, alt }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      {/* img  */}
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="product-Swiper main-swiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={alt} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* thumb */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="product-Swiper thumbs-swiper"
      >
        {images.map((thumb, index) => (
          <SwiperSlide key={index}>
            <img src={thumb} alt={alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
