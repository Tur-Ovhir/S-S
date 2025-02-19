import Link from "next/link";
import { Container } from "./assets";
import { Input } from "./ui/input";

export const Footer = () => {
  return (
    <Container background="bg-[#EEEFFB]">
      <div className="grid grid-cols-4 pt-24 pb-36 mt-10 ">
        <div className="col-span-2 space-y-6">
          <h1 className="text-3xl font-extrabold">S&S shop</h1>
          <div className="max-w-[484px] space-y-2 text-[#8A8FB9]">
            <p>Хаяг</p>
            <p>Ховд аймаг Эвийн хүч худалдааны төв 1 давхар A-24 тоот</p>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-extrabold">Ангилал</h1>
          <ul className="text-[#8A8FB9] space-y-5 mt-8">
            <li className="hover:underline hover:underline-offset-4">
              <Link href="/">Хувцас</Link>
            </li>

            <li className="hover:underline hover:underline-offset-4">
              <Link href="/">Гэр ахуйн бараа</Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-extrabold">Бусад</h1>
          <ul className="text-[#8A8FB9] space-y-5 mt-8">
            <li className="hover:underline hover:underline-offset-4">
              <Link href="/">Бидний тухай</Link>
            </li>
            <li className="hover:underline hover:underline-offset-4">
              <Link href="/">Холбоо барих</Link>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};
