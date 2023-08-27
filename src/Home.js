import useFetch from "./useFetch";
import BlogList from './BlogList';
import { baseUrl, blogsUrl } from "./Constants";

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
