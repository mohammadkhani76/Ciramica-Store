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
import { useFavoriteStore } from "../../Store/FavoriteStore";

export const ProductStoreSwiper = ({
  product,
  addToFav,
  addToCart,
  shopID,
}) => {
  const { favorite } = useFavoriteStore();

  return (
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
        0: { slidesPerView: 1, spaceBetween: 10 },
        480: { slidesPerView: 1, spaceBetween: 15 },
        768: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 4, spaceBetween: 20 },
      }}
    >
      {product.map((item, id) => {
        // بررسی اینکه محصول در علاقه مندی ها هست یا نه
        const existingShop = favorite.find((shop) => shop.shopID === shopID);
        const isFavorite = existingShop?.favorite.some((p) => p.id === item.id);

        return (
          <SwiperSlide key={id}>
            <div className="store-item">
              {/* discount */}
              {item.discount && (
                <div className="store-discount">{item.discount}</div>
              )}

              {/* تصویر */}
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
                    onClick={() =>
                      addToFav(shopID, {
                        id: item.id,
                        title: item.title,
                        price: item.discountPrice || item.price,
                        quantity: 1,
                        image: item.imageFront,
                        count: 1,
                      })
                    }
                  >
                    <SvgFavorite className={isFavorite ? "active" : ""} />
                  </button>
                  <button
                    className="icon-btn"
                    onClick={() =>
                      addToCart(shopID, {
                        id: item.id,
                        title: item.title,
                        price: item.discountPrice || item.price,
                        quantity: 1,
                        image: item.imageFront,
                      })
                    }
                  >
                    <SvgCart />
                  </button>
                </div>
              </div>

              {/* اطلاعات محصول */}
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

              {/* دکمه های موبایل */}
              <div className="store-item-btn">
                <button
                  className="store-item-btn-cart"
                  onClick={() =>
                    addToCart(shopID, {
                      id: item.id,
                      title: item.title,
                      price: item.discountPrice || item.price,
                      quantity: 1,
                      image: item.imageFront,
                    })
                  }
                >
                  <SvgCart /> <span>Add To Cart</span>
                </button>

                <button
                  className="store-item-btn-fav"
                  onClick={() =>
                    addToFav(shopID, {
                      id: item.id,
                      title: item.title,
                      price: item.discountPrice || item.price,
                      quantity: 1,
                      image: item.imageFront,
                      count: 1,
                    })
                  }
                >
                  <SvgFavorite className={isFavorite ? "active" : ""} />
                </button>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
