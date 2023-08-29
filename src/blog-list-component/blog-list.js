import Blog from '../blog-component/blog';

const BlogsList = ({ blogs, title }) => {
    return (
        <div>
            <h2>{title}</h2>
            { blogs.map(blog => (
                <Blog blog={ blog }></Blog>
            )) }
        </div>
    );
}
 
export default BlogsList;