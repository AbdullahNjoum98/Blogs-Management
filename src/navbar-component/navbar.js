import { Link } from "react-router-dom";
import { createUrl, homeUrl } from "../helpers/constants";

const  Navbar = () => {
    return (
        <nav className="navbar">
            <Link to={homeUrl}><h1>Blog Management System</h1></Link>
            <div className="links">
                <Link to={homeUrl}>Home</Link>
                <Link to={createUrl}
                   style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                   }}>Create a New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;