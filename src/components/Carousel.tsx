"use client";
import { useEffect, useState } from "react";
import { Container } from "./assets";
import { useData } from "./utils/dataProvider";

export const Carousel = () => {
  const [percent, setPercent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const { carousel } = useData();
  useEffect(() => {
    const interval = setInterval(() => {
      percent === 3 ? setIsTransitioning(false) : setIsTransitioning(true);
      setPercent((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  });
  return (
    <Container background=" bg-[#F2F0FF]">
      <div className="h-96 xl:h-[36rem] mx-4 xl:mx-0 rounded-2xl xl:rounded-none bg-white relative overflow-hidden mt-16">
        <div
          style={{ transform: `translateX(-${(percent * 100) / 4}%)` }}
          className={`absolute bg-red-200 w-[400%] flex h-full ${
            isTransitioning ? "duration-1000" : null
          }`}
        >
          <div
            style={{
              backgroundImage: `url(https://res.cloudinary.com/dykm0aphm/image/upload/v1736481827/9c82edd3-417c-46fa-a11c-b2e1116d43b7_zykwxo.jpg)`,
            }}
            className="w-1/4 bg-[#F2F0FF] h-full bg-contain bg-center relative "
          ></div>
          <div
            style={{
              backgroundImage: `url(https://res.cloudinary.com/dykm0aphm/image/upload/v1736481829/download_3_ucgtsq.jpg)`,
            }}
            className="w-1/4 bg-green-200 h-full bg-contain bg-center relative"
          ></div>
          <div
            style={{
              backgroundImage: `url(https://res.cloudinary.com/dykm0aphm/image/upload/v1736481832/f9735644-a255-4fc3-998b-e6cffa85602d_kfzwsw.jpg)`,
            }}
            className="w-1/4 bg-red-200 h-full bg-contain bg-center relative"
          ></div>
          <div
            style={{
              backgroundImage: `url(https://res.cloudinary.com/dykm0aphm/image/upload/v1736481827/9c82edd3-417c-46fa-a11c-b2e1116d43b7_zykwxo.jpg)`,
            }}
            className="w-1/4 bg-blue-200 h-full bg-contain bg-center relative"
          ></div>
        </div>
      </div>
    </Container>
  );
};
