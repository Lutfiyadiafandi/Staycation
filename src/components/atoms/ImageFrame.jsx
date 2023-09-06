import React from "react";
import propTypes from "prop-types";

const ImageFrame = ({ frame, image, direction }) => {
  if (direction === "left")
    return (
      <div className="relative w-full">
        <img src={frame} alt="" className="relative -z-10" />
        <img
          src={image}
          alt=""
          className="absolute top-0 left-0 right-0 z-10 mt-[15px] ml-[15px] md:mt-[30px] md:ml-[30px]"
        />
      </div>
    );
  if (direction === "right")
    return (
      <div className="relative w-full">
        <img src={frame} alt="" className="relative -z-10" />
        <img
          src={image}
          alt=""
          className="absolute top-0 left-0 right-0 z-10 -mt-[15px] -ml-[15px] md:-mt-[30px] md:-ml-[30px]"
        />
      </div>
    );
};

ImageFrame.propsTypes = {
  frame: propTypes.string,
  image: propTypes.string,
  direction: propTypes.oneOf(["left", "right"]),
};

export default ImageFrame;
