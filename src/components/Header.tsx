import { Container } from "./assets";
import { LuPhoneCall, LuMail, LuFacebook } from "react-icons/lu";
import Link from "next/link";
export const Header = () => {
  return (
    <Container background="bg-[#7E33E0]">
      <div className="flex justify-between items-center text-white py-2 px-8">
        <div className="flex gap-2 items-center hover:text-buttonP">
          <LuMail />
          S&S@gmail.com
        </div>
        <Link href="https://www.facebook.com/groups/422671690827432">
          <div className="flex gap-2 items-center hover:text-buttonP">
            <LuFacebook className="w-[20px] h-[20px]" />
            S&S Бэлэн Хувцас
          </div>
        </Link>
        <div className="flex gap-2 items-center hover:text-buttonP">
          <LuPhoneCall />
          88479125
        </div>
      </div>
    </Container>
  );
};
