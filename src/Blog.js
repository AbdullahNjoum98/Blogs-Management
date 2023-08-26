const Blog = ({ blog }) => {
    return (
        <div className="blog-preview" key= { blog.id }>
                <h2> { blog.title } </h2>
                <p> written by { blog.autor } </p>
        </div>
    );
}
 
export default Blog
