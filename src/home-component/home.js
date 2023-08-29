import useFetch from "../hooks/api-hooks/useFetch";
import BlogList from '../blog-list-component/blog-list';
import { baseUrl, blogsUrl } from "../helpers/constants";

const Home = () => {
    const url = `${baseUrl}${blogsUrl}`;
    const { data: blogs, loading, error } = useFetch(url);
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {loading && <div>Loading ...</div>}
            {blogs && <BlogList blogs = { blogs } title = "All Blogs!"></BlogList>}
        </div>
    );
}
 
export default Home;
