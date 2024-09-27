import { FaHome, FaInfoCircle } from "react-icons/fa";
import { MdHomeRepairService } from "react-icons/md";
import { IoIosContact } from "react-icons/io";

export const links = [
    {
        id:1,
        url: "/home",
        text: "Home",
        icon: <FaHome />
    },
    {
        id:2,
        url: "/about",
        text: "About",
        icon: <FaInfoCircle />
    },
    {
        id:3,
        url: "/services",
        text: "Services",
        icon: <MdHomeRepairService />
    },{
        id:4,
        url: "/contact",
        text: "Contact",
        icon: <IoIosContact />

    }
]

