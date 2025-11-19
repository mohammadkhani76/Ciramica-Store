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
import { BasketView } from "./pages/Basket/Basket";

function App() {
  return (
    <>
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
            {/* Other Pages */}
            <Route path="/contact-us" element={<Contactus />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/coming-soon" element={<h1>Coming Soon...</h1>} />
            {/* Basket */}
            <Route path="/cart" element={<BasketView />}></Route>
            {/* Global 404 */}
            <Route path="/*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
