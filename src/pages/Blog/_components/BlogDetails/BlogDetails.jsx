import { useParams } from "react-router";
import "./BlogDetails.css";
import { Loader } from "../../../../components/Loader/Loader";
import { blogpostData } from "../../../../constants/BlogpostData";
export const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogpostData.find((item) => item.id === id);
  if (!blog) return <Loader />;

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
