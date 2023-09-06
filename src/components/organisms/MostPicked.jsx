import React from "react";
import Container from "../atoms/Container";
import imgmostpicked1 from "../../assets/images/img-mostpicked-1.jpg";
import imgmostpicked2 from "../../assets/images/img-mostpicked-2.jpg";
import imgmostpicked3 from "../../assets/images/img-mostpicked-3.jpg";
import imgmostpicked4 from "../../assets/images/img-mostpicked-4.jpg";
import imgmostpicked5 from "../../assets/images/img-mostpicked-5.jpg";
import { Link } from "react-router-dom";

const MostPicked = () => {
  const mostPicked = [
    {
      _id: "asd1293uasdads1",
      name: "Jung Hook Sie",
      type: "Apartment",
      imageUrl: imgmostpicked1,
      country: "South Korea",
      city: "Seoul Flore",
      price: "80",
      unit: "night",
    },
    {
      _id: "asd1293uasdads1",
      name: "The People House",
      type: "Hotel",
      imageUrl: imgmostpicked2,
      country: "Indonesia",
      city: "Bogor",
      price: "52",
      unit: "night",
    },
    {
      _id: "asd1293uasdads1",
      name: "House Tour",
      type: "Rumah",
      imageUrl: imgmostpicked3,
      country: "South Korea",
      city: "Seoul Flore",
      price: "80",
      unit: "night",
    },
    {
      _id: "asd1293uasdads1",
      name: "Jung Hook Sie",
      type: "Apartment",
      imageUrl: imgmostpicked4,
      country: "South Korea",
      city: "Seoul Flore",
      price: "80",
      unit: "night",
    },
    {
      _id: "asd1293uasdads1",
      name: "Jung Hook Sie",
      type: "Apartment",
      imageUrl: imgmostpicked5,
      country: "South Korea",
      city: "Seoul Flore",
      price: "80",
      unit: "night",
    },
  ];
  return (
    <Container>
      <main className="mt-[70px]">
        <h4 className="mb-3 font-medium text-secondary text-display2">
          Most Picked
        </h4>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-cards gap-[15px] lg:gap-[30px]">
          {mostPicked.map((item, index) => (
            <div
              key={`mostPicked-${index}`}
              className={`${index === 0 ? "row-span-2" : "row-span-1"}`}
            >
              <Link to={"/"}>
                <div className="h-full card card-featured relative rounded-[15px] cursor-pointer overflow-hidden">
                  <div className="px-5 py-1 font-medium text-white tag text-detail2 bg-pink">
                    ${item.price}
                    <span className="font-light"> per {item.unit}</span>
                  </div>
                  <figure className="h-full mb-0 img-wrapper rounded-[15px] overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="object-cover w-full h-full"
                    />
                  </figure>
                  <div className="p-5 mt-4 text-white meta-wrapper">
                    <h5 className="font-normal text-display3 mb-[2px]">
                      {item.name}
                    </h5>
                    <span className="font-light text-detail3">
                      {item.city}, {item.country}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </section>
      </main>
    </Container>
  );
};

export default MostPicked;
