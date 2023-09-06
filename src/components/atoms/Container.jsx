import React from "react";

const Container = ({ children }) => {
  return (
    <section className="px-5 md:px-10 mx-auto max-w-screen-at xl:px-0">
      {children}
    </section>
  );
};

export default Container;
