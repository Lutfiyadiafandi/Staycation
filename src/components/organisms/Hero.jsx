import React from "react";
import Container from "../atoms/Container";
import Button from "../atoms/Button";
import ImageHero from "../../assets/images/img-hero.jpg";
import ImageHeroFrame from "../../assets/images/img-hero-frame.jpg";
import IconTraveler from "../../assets/icons/icon-traveler.svg";
import IconCities from "../../assets/icons/icon-cities.svg";
import IconTreasure from "../../assets/icons/icon-treasure.svg";
import ImageFrame from "../atoms/ImageFrame";

const icon = [
  {
    image: IconTraveler,
    number: 80.409,
    name: "travelers",
  },
  {
    image: IconTreasure,
    number: 809,
    name: "treasure",
  },
  {
    image: IconCities,
    number: 8.409,
    name: "cities",
  },
];
const Hero = () => {
  return (
    <Container>
      <main className="w-full mt-[130px] flex gap-10 flex-col md:flex-row md:justify-between">
        <section className="w-full md:w-1/2 flex flex-col gap-5 md:gap-[30px]">
          <div className="flex flex-col gap-2 md:gap-5">
            <h1 className="font-bold text-heading3 lg:text-heading1 text-secondary">
              Forget Busy Work,
              <br /> Start Next Vacation
            </h1>
            <h5 className="font-light text-detail2 text-grey lg:w-[333px]">
              We provide what you need to enjoy your holiday with family. Time
              to make another memorable moments.
            </h5>
          </div>
          <Button text={"Show Me Now"} size={"Small"} to={"/"} />
          <div className="grid grid-cols-3 gap-3 bg-red-20 md:gap-[50px] mt-5 lg:mt-[40px]">
            {icon.map((item) => (
              <div
                className="flex flex-col bg-yellow-20 gap-[10px] mx-auto md:mx-0"
                key={item.number}
              >
                <img src={item.image} alt="" className="w-8" />
                <h6 className="font-medium text-detail2 text-secondary">
                  {item.number}{" "}
                  <span className="font-light text-grey">{item.name}</span>
                </h6>
              </div>
            ))}
          </div>
        </section>

        <section className="order-first pl-[15px] md:pt-[30px] w-full md:w-1/2 md:order-last">
          <ImageFrame
            frame={ImageHeroFrame}
            image={ImageHero}
            direction={"right"}
          />
        </section>
      </main>
    </Container>
  );
};

export default Hero;
