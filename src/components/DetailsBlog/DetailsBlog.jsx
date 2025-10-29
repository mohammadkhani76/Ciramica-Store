import { useParams } from "react-router";
import "./DetailsBlog.css";
import { blogPosts } from "../BlogPost/SlideBlogSwiper";
export const DetailsBlog = () => {
  const { id } = useParams();
  const blog = blogPosts.find((item) => item.id === id);
  if (!blog) {
    return <p>پست پیدا نشد!</p>;
  }
  return (
    <div className="details-blog-wrapper container">
      <div className="details-blog-img">
        <img src={blog.img} alt={blog.title} />
      </div>
      <div className="details-blog-info">
        <span>{blog.date}</span> | <span>by {blog.author}</span>
      </div>
      <h2>{blog.title}</h2>
      <p>{blog.description}</p>
    </div>
  );
};
