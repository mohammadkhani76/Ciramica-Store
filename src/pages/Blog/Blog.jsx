import { BlogPost } from "../../components/BlogPost/BlogPost";
import { Newsletter } from "../../components/Newsletter/Newsletter";

export const Blog = () => {
  return (
    <div className="mainContainer container">
      <BlogPost />
      <Newsletter />
    </div>
  );
};
