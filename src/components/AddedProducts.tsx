import { AddedProductsCard, Container } from "./assets";
type productsData = {
  id: number;
  name: string;
  title: string;
  price: number;
  colors: string[];
  images: string[];
};
const productsData: productsData[] = [
  {
    id: 1,
    name: "Canon EOS 1500D",
    title: "Подволк ",
    price: 750000,
    colors: ["#000000", "#A6A6A6"],
    images: [
      "https://res.cloudinary.com/dykm0aphm/image/upload/v1736481828/c9d03b7d-a8a3-4090-9043-1dd75a3ef0e4_no7grf.jpg",
    ],
  },
  {
    id: 2,
    name: "Purple Cushion Chair",
    title: "бугатай цамц",
    price: 35000,
    colors: ["#E1BEE7", "#C5CAE9"],
    images: [
      "https://res.cloudinary.com/dykm0aphm/image/upload/v1736481830/download_4_irjwln.jpg",
    ],
  },
  {
    id: 3,
    name: "Gray Office Chair",
    title: "Үүргэвч",
    price: 6000,
    colors: ["#B0BEC5", "#CFD8DC"],
    images: [
      "https://res.cloudinary.com/dykm0aphm/image/upload/v1736481830/download_5_alahmn.jpg",
    ],
  },
  {
    id: 4,
    name: "Laptop Bag",
    title: "Хүүхдийн плаж",
    price: 80000,
    colors: ["#616161", "#424242"],
    images: [
      "https://res.cloudinary.com/dykm0aphm/image/upload/v1736481830/80171d33-46b9-4eac-a42b-2d32c30e8c10_1_qchrxx.jpg",
    ],
  },
  {
    id: 5,
    name: "Smartphone",
    title: "Загварлаг подволк",
    price: 30000,
    colors: ["#FF5722", "#FF7043"],
    images: [
      "https://res.cloudinary.com/dykm0aphm/image/upload/v1736481828/download_2_igles8.jpg",
    ],
  },
  {
    id: 6,
    name: "Men's Smartphone",
    title: "Нимгэн дотуур өмд",
    price: 1050000,
    colors: ["#3E2723", "#4E342E"],
    images: [
      "https://res.cloudinary.com/dykm0aphm/image/upload/v1736481831/1962433d-71e7-4a52-b083-26d853c82fcd_ktacwj.jpg",
    ],
  },
  {
    id: 7,
    name: "Beats Headphones",
    title: "Beats чихэвч",
    price: 450000,
    colors: ["#212121", "#757575"],
    images: [
      "https://res.cloudinary.com/dqhguhv7o/image/upload/v1723171040/samples/ecommerce/shoes.png",
    ],
  },
  {
    id: 8,
    name: "Soft Cushion Chair",
    title: "Зөөлөвчэй ягаан сандал",
    price: 135000,
    colors: ["#F48FB1", "#F06292"],
    images: [
      "https://res.cloudinary.com/dqhguhv7o/image/upload/v1725350095/image_1164_bqddec.png",
    ],
  },
];
export const AddedProducts = () => {
  return (
    <Container background="bg-white">
      <h1 className="text-center font-extrabold text-textB text-3xl mt-20 mb-14">
        Шинээр нэмэгдсэн
      </h1>
      <div className="grid grid-cols-4 gap-16">
        {productsData.map((product) => (
          <AddedProductsCard
            key={product.id}
            title={product.title}
            price={product.price}
            colors={product.colors}
            images={product.images}
          />
        ))}
      </div>
    </Container>
  );
};
