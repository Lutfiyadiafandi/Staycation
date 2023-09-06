import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="w-[263px] cursor-pointer hover:scale-95 transition-all ease-in-out duration-300">
      <Link>
        {props.popular && (
          <div className="px-5 py-1 font-medium text-white tag text-detail2 bg-pink">
            Popular <span className="font-light">Choice</span>
          </div>
        )}
        <img src={props.image} alt="" className="rounded-[15px]" />
        <div className="mt-4">
          <h5 className="font-normal text-secondary text-display3 mb-[2px]">
            {props.name}
          </h5>
          <span className="font-light text-detail3 text-grey">
            {props.city}, {props.country}
          </span>
        </div>
      </Link>
    </div>
  );
};
export default Card;
