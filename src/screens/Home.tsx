import React from "react";
import backgroundImage from "../assets/backgroundImage.jpg";

const Home = () => {
  return (
    <>
    <div
      className="h-[1000px] pt-12 flex justify-center bg-cover bg-center "
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1 className="text-9xl">Gustavo Curty</h1>
    </div>
    <div
      className="h-[1000px] pt-12 flex justify-center bg-cover bg-center "
      style={{ backgroundImage: `url(${backgroundImage})` }}>
    </div>
    </>
    
  );
};

export default Home;
