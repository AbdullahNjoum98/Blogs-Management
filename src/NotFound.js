import { Link } from "react-router-dom";
import { homeUrl } from "./Constants";

const  NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>This page can't be found!</p>
            <Link to={homeUrl}>Back to Home</Link>
        </div>
    );
}
 
export default NotFound;