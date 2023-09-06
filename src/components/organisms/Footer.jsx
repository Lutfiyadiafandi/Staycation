import React from "react";
import Container from "../atoms/Container";
import BrandIcon from "../atoms/BrandIcon";

const Footer = () => {
  return (
    <footer className="border-t border-[#E5E5E5]">
      <Container>
        <nav className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-10 auto-rows-auto  gap-x-10 md:gap-x-[70px] gap-y-[30px] md:gap-y-[50px] py-[50px]">
          <div className="lg:col-span-3">
            <BrandIcon />
            <h5 className="mt-3 text-grey text-detail2 font-light">
              We kaboom your beauty holiday instantly and memorable.
            </h5>
          </div>
          <div className="lg:col-span-2">
            <h4 className="mb-4 md:mb-[23px] text-secondary text-detail1 font-medium">
              For Beginners
            </h4>
            <ul className="flex flex-col gap-2 text-grey text-detail2 font-light">
              <li>New Account</li>
              <li>Start Booking a Room</li>
              <li>Use Payments</li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h4 className="mb-4 md:mb-[23px] text-secondary text-detail1 font-medium">
              Explore Us
            </h4>
            <ul className="flex flex-col gap-2 text-grey text-detail2 font-light">
              <li>Our Careers</li>
              <li>Privacy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h4 className="mb-4 md:mb-[23px] text-secondary text-detail1 font-medium">
              Connect Us
            </h4>
            <ul className="flex flex-col gap-2 text-grey text-detail2 font-light">
              <li>support@staycation.id</li>
              <li>021 - 2208 - 1996</li>
              <li>Lombok, West Nusa Tenggara</li>
            </ul>
          </div>

          <h5 className="mt-5 md:mt-0 col-span-full mx-auto text-grey text-detail3 text-center md:text-detail2 font-light">
            &copy; Copyright 2023 • All rights reserved • Staycation
          </h5>
        </nav>
      </Container>
    </footer>
  );
};

export default Footer;
