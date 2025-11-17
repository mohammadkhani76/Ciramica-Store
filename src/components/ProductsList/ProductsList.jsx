// import "./ProductsList.css";
// import { SvgFavorite } from "../../assets/icon/SvgFavorite";
// import { SvgCart } from "../../assets/icon/SvgCart";
// import { SvgStar } from "../../assets/icon/SvgStar";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router";
// import { useCartStore } from "../../Store/CartStore";
// import { useFavoriteStore } from "../../Store/FavoriteStore";

// export const ProductsList = () => {
//   const [products, setProducts] = useState([]);
//   // const { cartCount, addToCart, removeFromCart } = useCartStore();
//   // const { favoriteCount, addToFavorite, removeFromFavorite } =
//   //   useFavoriteStore();
//   async function getProduct() {
//     try {
//       const response = await axios.get(
//         "https://68ea40b6f1eeb3f856e6b72b.mockapi.io/product"
//       );
//       setProducts(response.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   }
//   useEffect(() => {
//     getProduct();
//   }, []);
//   return (
//     <>
//       <div className="product-wrapper container">
//         <h2>Popular Products</h2>
//         <div className="product-items">
//           {/* product */}
//           {products.map((item, id) => (
//             <div className="product-item" key={id}>
//               <div className="product-discount">{item.discount}%</div>
//               {/* product-picture */}
//               <div className="product-item-img-box">
//                 <Link to={`/product/${item.id}`}>
//                   <img
//                     src={item.imageFront}
//                     alt={item.title}
//                     className="img-box-front"
//                   />
//                   <img
//                     src={item.imageBack}
//                     alt={item.title}
//                     className="img-box-back"
//                   />
//                 </Link>
//                 <div className="product-icons">
//                   <button
//                     className="icon-btn"
//                     onClick={() => {
//                       addToFavorite(item);
//                     }}
//                   >
//                     <SvgFavorite />
//                   </button>
//                   <button
//                     className="icon-btn"
//                     onClick={() => {
//                       addToCart({ ...item, quantity: 1 });
//                     }}
//                   >
//                     <SvgCart />
//                   </button>
//                 </div>
//               </div>
//               {/* product-info */}
//               <div className="product-item-info">
//                 <h4>
//                   <Link to={`/product/${item.id}`}>{item.title}</Link>
//                 </h4>
//                 <span>
//                   {Array.from({ length: 5 }).map((_, i) => (
//                     <SvgStar
//                       key={i}
//                       className={i < item.rate ? "star filled" : "star"}
//                     />
//                   ))}
//                 </span>
//                 {/* <span>
//                   {"★".repeat(item.rate)}
//                   {"☆".repeat(5 - item.rate)}
//                 </span> */}
//                 <p>
//                   {item.discountPrice ? (
//                     <>
//                       <del>{item.price} $</del>
//                       <ins>{item.discountPrice} $</ins>
//                     </>
//                   ) : (
//                     <ins>{item.price} $</ins>
//                   )}
//                 </p>
//               </div>
//               <div className="product-item-btn">
//                 <button
//                   className="product-item-btn-cart"
//                   onClick={() => {
//                     addToCart({ ...item, quantity: 1 });
//                   }}
//                 >
//                   <SvgCart /> <span>Add To Cart</span>
//                 </button>
//                 <button
//                   className="product-item-btn-fav"
//                   onClick={() => {
//                     addToCart(item);
//                   }}
//                 >
//                   <SvgFavorite />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };
