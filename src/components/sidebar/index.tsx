import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ImStatsBars } from "react-icons/im";
import { FaFileInvoice } from "react-icons/fa";
import { BsCartCheckFill } from "react-icons/bs";
import { menuProps } from "../../utils/interface";

const Sidebar = () => {
  const location = useLocation();
  const menu: menuProps[] = [
    {
      id: 1,
      label: "Products",
      link: "/",
      icon: <BsCartCheckFill className="text-green-600" />
      
    },
    {
      id: 2,
      label: "Cart",
      link: "/cart",
      icon: <BsCartCheckFill className="text-green-600" />
      
    },
    {
      id: 3,
      label: "Pos",
      link: "/user/pos",
      icon: <ImStatsBars className="text-green-600" />
    },
    {
      id: 4,
      label: "Invoice",
      link: "/invoice",
      icon: <FaFileInvoice className="text-green-600" />,
    },
  ];

  return (
    <div>
      {menu.length > 0 &&
        menu.map((ele: menuProps) => (
          <Link to={ele?.link} key={ele?.id}>
            <div
              className={` px-6 border-b-2 border-green-600  h-24  flex flex-col justify-center items-center hover:bg-gray-100 hover:font-bold
            ${
              location?.pathname === ele?.link
                ? "bg-zinc-700 font-bold text-white"
                : "bg-white font-semibold "
            }`}
            >
              <div className="text-2xl">{ele?.icon}</div>
              {ele?.label}
            </div>
          </Link>
        ))}
    </div>
  );
};

export default React.memo(Sidebar);
