import { HiOutlineChat } from "react-icons/hi";
import { BiAddToQueue } from "react-icons/bi";
import { TbDashboard } from "react-icons/tb";
import { RiAccountCircleLine } from "react-icons/ri";

const menu = [
  {
    title: "Dashboard",
    icon: <TbDashboard />,
    path: "/dashboard",
  },
  {
    title: "Add Product",
    icon: <BiAddToQueue />,
    path: "/add-product",
  },
  {
    title: "Account",
    icon: <RiAccountCircleLine />,
    childrens: [
      {
        title: "Profile",
        path: "/profile",
      },
      {
        title: "Edit Profile",
        path: "/edit-profile",
      },
    ],
  },
  {
    title: "Contact Us",
    icon: <HiOutlineChat />,
    path: "/contact-us",
  },
];

export default menu;
