import React from "react";
import { Link } from "react-router-dom";

const BrandIcon = () => {
  return (
    <Link to="/">
      <h1 className="font-medium text-display1 text-primary">
        Stay
        <span className="text-secondary">cation.</span>
      </h1>
    </Link>
  );
};

export default BrandIcon;
