import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./ProductStoreSwiper.css";
import "./ProductStore.css";

import { FreeMode, Pagination } from "swiper/modules";
import { Link } from "react-router";
import { SvgFavorite } from "../../assets/icon/SvgFavorite";
import { SvgCart } from "../../assets/icon/SvgCart";
import { SvgStar } from "../../assets/icon/SvgStar";

export const ProductStoreSwiper = ({ product, addToFavorite, addToCart }) => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="store-swiper"
        breakpoints={{
          0: {
            slidesPerView: 1, // موبایل خیلی کوچک
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {product.map((item, id) => (
          <SwiperSlide key={id}>
            <div className="store-item">
              {/* product discount */}
              {item.discount && (
                <div className="store-discount">{item.discount}%</div>
              )}

              {/* product picture */}
              <div className="store-item-img-box">
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.imageFront}
                    alt={item.title}
                    className="img-box-front"
                  />
                  <img
                    src={item.imageBack}
                    alt={item.title}
                    className="img-box-back"
                  />
                </Link>
                <div className="store-icons">
                  <button
                    className="icon-btn"
                    onClick={() => addToFavorite(item)}
                  >
                    <SvgFavorite />
                  </button>
                  <button
                    className="icon-btn"
                    onClick={() => addToCart({ ...item, quantity: 1 })}
                  >
                    <SvgCart />
                  </button>
                </div>
              </div>

              {/* product info */}
              <div className="store-item-info">
                <h4>
                  <Link to={`/product/${item.id}`}>{item.title}</Link>
                </h4>
                <span>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <SvgStar
                      key={i}
                      className={i < item.rate ? "star filled" : "star"}
                    />
                  ))}
                </span>
                <p>
                  {item.discountPrice ? (
                    <>
                      <del>{item.price} $</del>
                      <ins>{item.discountPrice} $</ins>
                    </>
                  ) : (
                    <ins>{item.price} $</ins>
                  )}
                </p>
              </div>

              {/* buttons */}
              <div className="store-item-btn">
                <button
                  className="store-item-btn-cart"
                  onClick={() => addToCart({ ...item, quantity: 1 })}
                >
                  <SvgCart /> <span>Add To Cart</span>
                </button>
                <button
                  className="store-item-btn-fav"
                  onClick={() => addToFavorite(item)}
                >
                  <SvgFavorite />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
