import React from "react";
import Container from "../atoms/Container";
import SliderCard from "../molecules/SliderCard";
import Card from "../molecules/Card";
import { SplideSlide } from "@splidejs/react-splide";
import imgcategory1 from "../../assets/images/img-category-1.jpg";
import imgcategory2 from "../../assets/images/img-category-2.jpg";
import imgcategory3 from "../../assets/images/img-category-3.jpg";
import imgcategory4 from "../../assets/images/img-category-4.jpg";

const CategoryHouse = () => {
  const house = [
    {
      _id: "asd1293uasdads1",
      name: "PSW Antasari",
      imageUrl: imgcategory1,
      country: "South Korea",
      city: "Seoul Flore",
      isPopular: true,
    },
    {
      _id: "asd1293uasdads1",
      name: "Kuretakeso",
      imageUrl: imgcategory2,
      country: "South Korea",
      city: "Seoul Flore",
      isPopular: false,
    },
    {
      _id: "asd1293uasdads1",
      name: "Arya Duta",
      imageUrl: imgcategory3,
      country: "South Korea",
      city: "Seoul Flore",
      isPopular: false,
    },
    {
      _id: "asd1293uasdads1",
      name: "Grand Dhika",
      imageUrl: imgcategory4,
      country: "South Korea",
      city: "Seoul Flore",
      isPopular: false,
    },
  ];

  return (
    <Container>
      <main className="mt-[70px]">
        <h4 className="text-display2 text-secondary font-medium mb-5">
          Houses with beauty backyard
        </h4>
        <SliderCard>
          {house.map((item) => (
            <SplideSlide key={item.name}>
              <Card
                popular={item.isPopular}
                image={item.imageUrl}
                name={item.name}
                city={item.city}
                country={item.country}
              />
            </SplideSlide>
          ))}
        </SliderCard>
      </main>
    </Container>
  );
};
export default CategoryHouse;
