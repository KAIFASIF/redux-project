import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import Table from "../../libraries/Table";
import CartRow from "./CartRow";
import Button from "../../components/Button";
import { deleteCart } from "../../redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const data: any = useSelector((state: RootState) => state?.cart?.cartItems);
  const headers: string[] = ["Image", "Title", "Quantity", "price", "Amount"];
  useEffect(() => {
    getTotalAmount();
  }, []);

  const getTotalAmount = () => {
    console.log(data);
    if (data.length > 0) {
      setTotalAmount(
        data.reduce((acc: number, ele: any) => {
          return acc + ele?.price * ele?.qty;
        }, 0)
      );
    }
  };

  return (
    data.length > 0 && (
      <div className="flex w-full justify-center  p-10 items-center">
        <div className=" w-full">
          <Table tableData={data} headers={headers} TableRow={CartRow} />
        </div>

        <div className="w-full ml-10">
          <p className="whitespace-pre">Total Items total : {data.length}</p>
          <p className="whitespace-pre">Total Amount : Rs - {totalAmount}</p>
          <p className="whitespace-pre">Gst 12% : Rs - {totalAmount * 0.12}</p>
          <p className="whitespace-pre">
            Grand total : Rs - {totalAmount + totalAmount * 0.12}
          </p>
          <div className="flex w-[25%] mt-2">
            <Button
              label="Reset cart"
              onClick={() => dispatch(deleteCart())}
              className="bg-red-400 rounded px-2 py-2 mt-2 text-white w-full hover:bg-green-200 hover:text-gray-800 hover:font-semibold"
            />
          </div>
        </div>
      </div>
    )
  );
};

export default Cart;
