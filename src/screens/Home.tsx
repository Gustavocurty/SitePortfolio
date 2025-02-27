import React from "react";
import backgroundImage from "../assets/backgroundImage.jpg";

const Home = () => {
  return (
    <>
    <div
      className="h-[1000px] pt-12 flex justify-center bg-cover bg-center "
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="w-full ml-30 mt-40">
        <h1 className="text-6xl">Gustavo</h1>
        <h1 className="text-9xl font-bold">CURTY</h1>
      </div>
    </div>
    <div
      className="h-[1000px] pt-12 flex justify-center bg-cover bg-center scale-y-[-1]"
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
      }}>
    </div>
    </>
    
  );
};

export default Home;
