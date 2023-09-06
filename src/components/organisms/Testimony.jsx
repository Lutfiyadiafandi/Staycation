import React from "react";
import Container from "../atoms/Container";
import ImageFrame from "../atoms/ImageFrame";
import ImageTesti from "../../assets/images/img-testimonial.jpg";
import ImageTestiFrame from "../../assets/images/img-testimonial-frame.jpg";
import Star from "../atoms/Star";
import Button from "../atoms/Button";

const Testimony = () => {
  return (
    <Container>
      <main className="mt-[100px] pb-[100px] flex flex-col sm:flex-row items-center">
        <figure className="w-[280px] h-[425px] lg:w-[405px] lg:h-[550px] pr-[15px]">
          <ImageFrame
            frame={ImageTestiFrame}
            image={ImageTesti}
            direction={"left"}
          />
        </figure>
        <section className="w-full sm:w-1/2 sm:ml-10 md:ml-20 flex flex-col gap-5 lg:gap-10">
          <h4 className="text-display3 lg:text-display2 text-secondary font-medium">
            Happy Family
          </h4>
          <div className="flex flex-col gap-2">
            <Star value={4.55} />
            <h5 className="text-display2 lg:text-heading3 text-secondary font-normal">
              What a great trip with my family and I should try again next time
              soon ...
            </h5>
            <span className="text-detail1 text-grey font-light">
              Lutfiyadi Afandi, Front End Developer
            </span>
          </div>
          <Button text={"Read Their Story"} size={"Small"} to={"/"} />
        </section>
      </main>
    </Container>
  );
};

export default Testimony;
