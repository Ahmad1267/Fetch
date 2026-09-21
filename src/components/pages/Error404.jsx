import { Link } from "react-router";
import "./Error.css";

function Error404() {
  return (
    <div className="not-found">
      <div className="not-found-box">
        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>
          Sorry, the page you are looking for does not exist.
        </p>

        <Link to="/" className="home-btn">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default Error404;