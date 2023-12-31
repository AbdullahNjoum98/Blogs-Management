import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { POST, baseUrl, blogsUrl, homeUrl } from "../helpers/constants";

const Create = () => {
    const authors = ['Jack', 'Kane', 'Maria'];
    const [title, setTitle] = useState(''); 
    const [body, setBody] = useState(''); 
    const [author, setAuthor] = useState('Jack');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault(); //prevent refresh on submit
        setLoading(true);
        const blog = { title, author, body };
        fetch(`${baseUrl}${blogsUrl}`, {
            method: POST,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(blog)
        }).then(() => setLoading(false));

        navigate(homeUrl);
    }

    return (
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Blog title:</label>
                <input  id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        required/>
                <label htmlFor="author">Blog author:</label>
                <select id="author" 
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}>
                    {authors.map(author => (
                        <option>{author}</option>
                    ))}
                </select>
                <label htmlFor="body">Blog body:</label>
                <textarea id="body"
                          required
                          value={body}
                          onChange={(e) => setBody(e.target.value)}></textarea>
                { !loading && <button>Add Blog</button>}   
                { loading && <button disabled>Adding Blog..</button>}   
            </form>
        </div>
    );
}
 
export default Create;