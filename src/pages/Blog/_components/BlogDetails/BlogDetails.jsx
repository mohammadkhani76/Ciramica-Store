import { useParams } from "react-router";
import "./BlogDetails.css";
import { blogPosts } from "../../../../components/BlogPost/SlideBlogSwiper";
import { BlogNotFound } from "../BlogNotFound/BlogNotFound";
export const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogPosts.find((item) => item.id === id);
  if (!blog) return <BlogNotFound />;

  return (
    <div className=" container mainContainer">
      <div className="details-blog-wrapper">
        <div className="details-blog-img">
          <img src={blog.img} alt={blog.title} />
        </div>
        <div className="details-blog-info">
          <span>{blog.date}</span> | <span>by {blog.author}</span>
        </div>
        <h2>{blog.title}</h2>
        <p>{blog.description}</p>
      </div>
    </div>
  );
};
