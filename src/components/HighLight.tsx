"use client";
import { useEffect, useState } from "react";
import { Container, HighLightCard } from "./assets";
type productsData = {
  id: number;
  name: string;
  title: string;
  price: number;
  images: string[];
};
const productsData: productsData[] = [
  {
    id: 9,
    name: "Single Blazer",
    title: "Дан хүрэм пиджак",
    price: 220000,
    images: [
      "https://res.cloudinary.com/dykm0aphm/image/upload/v1736481827/9a024c01-1dd8-44e4-bc69-5bc46d234f88_pvgwhv.jpg",
    ],
  },
  {
    id: 10,
    name: "Desk Lamp",
    title: "Ширээний чийдэн",
    price: 60000,
    images: [
      "https://res.cloudinary.com/dykm0aphm/image/upload/v1736481827/9c82edd3-417c-46fa-a11c-b2e1116d43b7_zykwxo.jpg",
    ],
  },
  {
    id: 11,
    name: "Outer Jacket",
    title: "Гадуур хүрэм",
    price: 280000,
    images: [
      "https://res.cloudinary.com/dykm0aphm/image/upload/v1736481828/19a9a03f-9639-4ee1-b7b5-88d2149e5aae_hf69ge.jpg",
    ],
  },
  {
    id: 12,
    name: "Noise Cancelling Headphones",
    title: "Дуу намсгагчтай чихэвч",
    price: 550000,
    images: [
      "https://res.cloudinary.com/dykm0aphm/image/upload/v1736481828/4d0d0a49-80fc-4b39-9888-893001fe810a_esmuos.jpg",
    ],
  },
];

export const HighLight = () => {
  const [percent, setPercent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      percent === 3 ? setIsTransitioning(false) : setIsTransitioning(true);
      setPercent((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  });
  return (
    <Container background="bg-white">
      <h1 className="text-center font-extrabold text-textB text-3xl mt-20 mb-10">
        Онцлох бүтээгдэхүүн
      </h1>
      <div className="flex justify-between">
        {productsData.map((product) => (
          <HighLightCard
            key={product.id}
            title={product.title}
            price={product.price}
            images={product.images}
          />
        ))}
      </div>
      <div className="mt-14 h-1 flex gap-2 justify-center">
        <div
          className={`w-4 rounded-lg h-full duration-700  ${
            percent === 0 ? "bg-red-500 w-6" : "bg-red-300"
          }`}
        ></div>
        <div
          className={`w-4 rounded-lg h-full duration-700  ${
            percent === 1 ? "bg-red-500 w-6" : "bg-red-300"
          }`}
        ></div>
        <div
          className={`w-4 rounded-lg h-full duration-700  ${
            percent === 2 ? "bg-red-500 w-6" : "bg-red-300"
          }`}
        ></div>
        <div
          className={`w-4 rounded-lg h-full duration-700  ${
            percent === 3 ? "bg-red-500 w-6" : "bg-red-300"
          }`}
        ></div>
      </div>
    </Container>
  );
};
