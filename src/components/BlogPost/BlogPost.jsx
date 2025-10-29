import "./BlogPost.css";
import { SlideBlogSwiper } from "./SlideBlogSwiper";

export const BlogPost = () => {
  return (
    <div className="blog-wrapper container">
      <h2>Our Latest Blog</h2>
      <SlideBlogSwiper />
    </div>
  );
};
