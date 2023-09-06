import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

const Button = ({ text, size, to }) => {
  return size === "Small" ? (
    <Link to={to} className="w-[180px] md:w-[210px]">
      <button className="w-full h-[50px] flex justify-center items-center text-detail1 font-medium text-white rounded bg-primary btn focus:outline-none hover:scale-95 transition-all ease-in-out duration-300">
        {text}
      </button>
    </Link>
  ) : (
    <Link to={to} className="w-[290px] md:w-[320px]">
      <button className="w-full h-[50px] flex justify-center items-center text-detail1 font-medium text-white rounded bg-primary btn focus:outline-none hover:scale-105 transition-all ease-in-out duration-300">
        {text}
      </button>
    </Link>
  );
};

Button.propsTypes = {
  text: propTypes.string,
  size: propTypes.string,
  to: propTypes.string,
};
export default Button;
