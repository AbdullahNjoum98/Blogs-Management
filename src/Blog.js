import { Link } from "react-router-dom";
import { blogsUrl } from "./Constants";

const Blog = ({ blog }) => {
    return (
        <div className="blog-preview" key= { blog.id }>
                <Link to={`${blogsUrl}/${blog.id}`}>
                    <h2> { blog.title } </h2>
                    <p> written by { blog.author } </p>
                </Link>
        </div>
    );
}
 
export default Blog
