import Link from "next/link";
import { Container } from "./assets"
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
export const Foot = () => {
    return (
        <Container background="bg-[#E7E4F8]">
            <div className="flex justify-between px-8 py-4 max-w-screen-lg">
                <div className="text-[#9DA0AE]">
                    &copy;S&S shop
                </div>
                <div className="flex gap-2">
                    <div className="bg-textB hover:bg-buttonP hover:scale-125 duration-300 text-white p-[6px] rounded-full">
                        <Link href="/https://www.facebook.com/groups/422671690827432"><FaFacebookF className="w-3 h-3" /></Link>
                    </div>
                </div>
            </div>
        </Container>
    )
}