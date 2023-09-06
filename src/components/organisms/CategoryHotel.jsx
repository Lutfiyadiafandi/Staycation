import React from "react";
import Container from "../atoms/Container";
import SliderCard from "../molecules/SliderCard";
import Card from "../molecules/Card";
import { SplideSlide } from "@splidejs/react-splide";
import imgcategory5 from "../../assets/images/img-category-5.jpg";
import imgcategory6 from "../../assets/images/img-category-6.jpg";
import imgcategory7 from "../../assets/images/img-category-7.jpg";
import imgcategory8 from "../../assets/images/img-category-8.jpg";

const CategoryHotel = () => {
  const hotel = [
    {
      _id: "asd1293uasdads1",
      name: "PSW Antasari",
      imageUrl: imgcategory5,
      country: "South Korea",
      city: "Seoul Flore",
      isPopular: false,
    },
    {
      _id: "asd1293uasdads1",
      name: "Kuretakeso",
      imageUrl: imgcategory6,
      country: "South Korea",
      city: "Seoul Flore",
      isPopular: false,
    },
    {
      _id: "asd1293uasdads1",
      name: "Arya Duta",
      imageUrl: imgcategory7,
      country: "South Korea",
      city: "Seoul Flore",
      isPopular: false,
    },
    {
      _id: "asd1293uasdads1",
      name: "Grand Dhika",
      imageUrl: imgcategory8,
      country: "South Korea",
      city: "Seoul Flore",
      isPopular: true,
    },
  ];
  return (
    <Container>
      <main className="mt-[70px]">
        <h4 className="text-display2 text-secondary font-medium mb-5">
          Hotels with large living room
        </h4>
        <SliderCard>
          {hotel.map((item) => (
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

export default CategoryHotel;
