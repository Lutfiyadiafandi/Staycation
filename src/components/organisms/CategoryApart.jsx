import React from "react";
import Container from "../atoms/Container";
import SliderCard from "../molecules/SliderCard";
import Card from "../molecules/Card";
import { SplideSlide } from "@splidejs/react-splide";
import imgcategory9 from "../../assets/images/img-category-9.jpg";
import imgcategory10 from "../../assets/images/img-category-10.jpg";
import imgcategory11 from "../../assets/images/img-category-11.jpg";
import imgcategory12 from "../../assets/images/img-category-12.jpg";

const CategoryApart = () => {
  const apart = [
    {
      _id: "asd1293uasdads1",
      name: "PSW Antasari",
      imageUrl: imgcategory9,
      country: "South Korea",
      city: "Seoul Flore",
      isPopular: false,
    },
    {
      _id: "asd1293uasdads1",
      name: "Kuretakeso",
      imageUrl: imgcategory10,
      country: "South Korea",
      city: "Seoul Flore",
      isPopular: false,
    },
    {
      _id: "asd1293uasdads1",
      name: "Arya Duta",
      imageUrl: imgcategory11,
      country: "South Korea",
      city: "Seoul Flore",
      isPopular: true,
    },
    {
      _id: "asd1293uasdads1",
      name: "Grand Dhika",
      imageUrl: imgcategory12,
      country: "South Korea",
      city: "Seoul Flore",
      isPopular: false,
    },
  ];
  return (
    <Container>
      <main className="mt-[70px]">
        <h4 className="text-display2 text-secondary font-medium mb-5">
          Apartments with kitchen set
        </h4>
        <SliderCard>
          {apart.map((item) => (
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

export default CategoryApart;
