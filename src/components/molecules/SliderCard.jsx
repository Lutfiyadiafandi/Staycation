import React from "react";
import { Splide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";

const SliderCard = ({ children }) => {
  return (
    <Splide
      options={{
        drag: "free",
        arrows: false,
        pagination: false,
        perPage: 4,
        perMove: 1,
        gap: "30px",
        width: "1140",
        autoWidth: true,
        breakpoints: {
          560: {
            perPage: 1,
            gap: "30px",
          },
          768: {
            perPage: 2,
            gap: "30px",
          },
          1024: {
            perPage: 3,
            gap: "30px",
          },
        },
      }}
      hasTrack={false}
      aria-label="..."
    >
      <div className="custom-wrapper">
        <SplideTrack>{children}</SplideTrack>
      </div>
    </Splide>
  );
};
export default SliderCard;
