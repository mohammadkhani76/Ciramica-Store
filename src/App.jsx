import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { Blog } from "./pages/Blog/Blog";
import { Contactus } from "./pages/ContactUs/Contactus";
import { Shop } from "./pages/Shop/Shop";
import { Layout } from "./components/Layout/Layout";
import { DetailsBlog } from "./components/DetailsBlog/DetailsBlog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />}>
              <Route path="/blog/:id" element={<DetailsBlog />} />
            </Route>
            <Route path="/contact-us" element={<Contactus />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/coming-soon" element={<h1>Coming Soon...</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
