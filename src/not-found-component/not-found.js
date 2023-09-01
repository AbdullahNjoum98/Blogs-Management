import { Link } from "react-router-dom";
import { homeUrl } from "../helpers/constants";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>This page can't be found!</p>
            <Link role="home" to={homeUrl}>Back to Home</Link>
        </div>
    );
}
 
export default NotFound;