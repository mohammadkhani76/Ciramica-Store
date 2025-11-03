import { Link } from "react-router";
import "./BlogNotFound.css";
export const BlogNotFound = () => {
  return (
    <div className="blog-notfound-wrapper container mainContainer">
      <h1>404</h1>
      <h2>Blog Post Not Found</h2>
      <p>The blog article you’re looking for could not be found.</p>
      <p>
        <Link to={"/"}>Go back home</Link>
      </p>
    </div>
  );
};
