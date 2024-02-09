import React from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import Button from "./Button";
import { FormProvider, useForm } from "react-hook-form";
import RHFTextField from "../libraries/form/RHFTextField";
import { addCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const Card = (props:any) => {
  const methods = useForm();
  const { image, title, price } = props
  const dispatch = useDispatch()

  return (
    <div className="flex flex-col justify-center items-center rounded py-4 border-2 border-gray-400 bg-white">
      <div className="rounded flex flex-col justify-center bg-white w-40 h-40  p-4 border border-gray-800">
        <img
          src={`/assets/images/${image}`}
          className="bg-white w-36 h-36  object-contain rounded"
          alt="new image"
        />
      </div>
      <p className="mt-2 font-semibold text-lg">{title}</p>
      <p className="font-semibold text-md text-gray-800 mt-2">
        price: Rs {price}
      </p>
      {/* <div className="flex items-center justify-center mt-4">
        <FaMinus className="cursor-pointer text-gray-800" />
        <FormProvider {...methods}>
          <div className="flex w-[50%] mx-4 ">
            <RHFTextField name="qty" className="w-[50%]"  value={0}/>
          </div>
        </FormProvider>
        <FaPlus className="cursor-pointer text-gray-800" />
      </div> */}

      <div className="flex px-4 justify-center items-center w-full">
        <Button
          label="Add to cart"
          onClick={()=>dispatch(addCart({...props, qty:1}))}
          className="bg-green-400 rounded px-2 py-2 mt-2 text-white w-full hover:bg-green-200 hover:text-gray-800 hover:font-semibold"
        />
      </div>
    </div>
  );
};

export default React.memo(Card);
