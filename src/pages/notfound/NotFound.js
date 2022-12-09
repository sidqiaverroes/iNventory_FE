import React from "react";
import "./NotFound.scss";

function NotFound() {
  return (
    <div className="notFound">
      <span className="error">404</span>
      <span className="title">Not Found</span>
      {/* <Link to="/">Back to Home</Link> */}
    </div>
  );
}

export default NotFound;
