import React from "react";
import PropTypes from "prop-types";

export default function Star({ className, value }) {
  const decimals = Number(value) % 1;

  const star = [];
  let leftPos = 0;
  const width = 35;
  const height = 35;
  const spacing = 4;

  for (let index = 0; index < 5 && index < value - decimals; index++) {
    leftPos += width;
    star.push(
      <div
        className="star absolute inline-flex"
        key={`star-${index}`}
        style={{
          left: index * width,
          width: width,
          height: height,
          marginRight: spacing,
        }}
      ></div>
    );
  }
  if (decimals > 0 && value <= 5)
    star.push(
      <div
        className="star absolute inline-flex"
        key={`starWithDecimals`}
        style={{
          left: leftPos,
          height: height,
          width: decimals * width - spacing,
        }}
      ></div>
    );

  const starPlaceholder = [];
  for (let index = 0; index < 5; index++) {
    starPlaceholder.push(
      <div
        className="star placeholder absolute inline-flex"
        key={`starPlaceholder-${index}`}
        style={{
          left: index * width,
          width: width,
          height: height,
          marginRight: spacing,
        }}
      ></div>
    );
  }

  return (
    <>
      <div
        className={[
          "stars relative inline-flex min-w-[200px] h-[35px]",
          className,
        ].join(" ")}
      >
        {starPlaceholder}
        {star}
      </div>
    </>
  );
}

Star.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number,
};
