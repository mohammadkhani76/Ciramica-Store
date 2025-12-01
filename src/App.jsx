import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { Blog } from "./pages/Blog/Blog";
import { Contactus } from "./pages/ContactUs/Contactus";
import { Shop } from "./pages/Shop/Shop";
import { Layout } from "./components/Layout/Layout";
import { BlogDetails } from "./pages/Blog/_components/BlogDetails/BlogDetails";
import { Products } from "./pages/Products/Products";
import { ProductsDetails } from "./pages/Products/_components/ProductsDetails/ProductsDetails";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { ProductNotFound } from "./pages/Products/_components/ProductsDetails/ProductNotFound/ProductNotFound";
import { BlogNotFound } from "./pages/Blog/_components/BlogNotFound/BlogNotFound";
import { BasketView } from "./pages/BasketView/BasketView";
import { useEffect } from "react";
import { useBasketStore } from "./Store/CartStore";
import { useLocalStorage } from "./customHook/useLocalStorage";
import { Checkout } from "./pages/Checkout/Checkout";
import { AboutUs } from "./pages/AboutUs/AboutUs";
import { Faqs } from "./pages/Faqs/Faqs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ComingSoon } from "./pages/ComingSoon/ComingSoon";
function App() {
  const { setBasket } = useBasketStore();
  const { loadFromLocalStorage } = useLocalStorage("_b");

  useEffect(() => {
    const loadData = loadFromLocalStorage();
    // console.log("loadData", loadData);
    if (loadData.length > 0) {
      setBasket(loadData);
    }
  }, []);
  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            {/* Home */}
            <Route path="/" element={<Home />} />
            {/* Blog */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/blog/*" element={<BlogNotFound />} />
            {/* Product */}
            <Route path="/product" element={<Products />} />
            <Route path="/product/:id" element={<ProductsDetails />} />
            <Route path="/product/*" element={<ProductNotFound />} />
            {/* Basket */}
            <Route path="/cart" element={<BasketView />}></Route>
            {/* Checkout */}
            <Route path="/checkout/:id" element={<Checkout />}></Route>
            {/* AboutUs */}
            <Route path="/about-us" element={<AboutUs />}></Route>
            {/* Contactus */}
            <Route path="/contact-us" element={<Contactus />}></Route>
            {/* shop */}
            <Route path="/shop" element={<Shop />} />
            {/* FAQ */}
            <Route path="/faqs" element={<Faqs />} />
            {/* coming soon */}
            <Route path="/coming-soon" element={<ComingSoon />} />
            {/* Global 404 */}
            <Route path="/*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
