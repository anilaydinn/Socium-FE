import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      Not Found <Link to={"/"}>Go Home</Link>
    </div>
  );
};

export default NotFound;
