import React from "react";

type cartRowType = {
  ele: any;
};
const CartRow: React.FC<cartRowType> = ({ ele }) => {
  return (
    <tr className="tableBodyTr hover:bg-gray-100 border-b-2 w-full">
      <td className="tableBodyTd pl-5 py-4  w-4 h-4 border-2 border-gray-400 rounded">
        {" "}
        <img src={`assets/images/${ele?.image}`} alt="cart Image" className="w-full h-10 " />
      </td>
      <td className="tableBodyTd pl-5 py-4 text-gray-500 text-sm font-normal m-10">
        {" "}
        {ele?.title}
      </td>
      <td className="tableBodyTd pl-5 py-4 text-gray-500 text-sm font-normal">
        {" "}
        {ele?.qty}
      </td>
      <td className="tableBodyTd pl-5 py-4 text-gray-500 text-sm font-normal">
        {" "}
        {ele?.price}
      </td>
      <td className="tableBodyTd pl-5 py-4 text-gray-500 text-sm font-normal">
        {" "}
        {ele?.qty * ele?.price}
      </td>
    </tr>
  );
};

export default CartRow;
