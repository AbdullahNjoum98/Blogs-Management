import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { DELETE, baseUrl, blogsUrl, homeUrl } from "./Constants";

const  BlogDetails = () => {
    const { id } = useParams();
    const url = `${baseUrl}${blogsUrl}/${id}`;
    const { data: blog, error , loading } = useFetch(url);
    const navigate = useNavigate();
    const handleClick = () => {
        fetch(`${baseUrl}${blogsUrl}/${blog.id}`, {
            method: DELETE
        }).then(() => {
            navigate(homeUrl);
        })
    };

    return (
        <div className="blog-details">
            { loading && <div>Loading ...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2> {blog.title} </h2>
                    <p>  Written by {blog.author} </p>
                    <div> {blog.body} </div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;