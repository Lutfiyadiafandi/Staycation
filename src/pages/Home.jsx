import React from "react";
import Header from "../components/organisms/Header";
import Hero from "../components/organisms/Hero";
import MostPicked from "../components/organisms/MostPicked";
import CategoryHouse from "../components/organisms/CategoryHouse";
import CategoryHotel from "../components/organisms/CategoryHotel";
import CategoryApart from "../components/organisms/CategoryApart";
import Testimony from "../components/organisms/Testimony";
import Footer from "../components/organisms/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <MostPicked />
      <CategoryHouse />
      <CategoryHotel />
      <CategoryApart />
      <Testimony />
      <Footer />
    </>
  );
};

export default Home;
