import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Card from "../components/Card";
import Events from "../components/Events";
import Footer from "../components/Footer";

const ShowCase = () => {
  return (
    <>
      <Header />
      <div className="h-[80vh] w-full overflow-hidden flex">
        <div className="h-full w-8/12">
          <Slider />
          <Card />
        </div>
        <div className="h-full w-1/2">
        <Events />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ShowCase;
