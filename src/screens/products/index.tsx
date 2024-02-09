import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/Card";

const Products = () => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    onsubmit();
  }, []);

  const onsubmit = async () => {
    try {
      const res = await axios.get("http://localhost:3031/products");
      if (res?.status === 200) {
        setData(res?.data);
      }
    } catch (error: any) {}
  };

  return (
    <div className="flex justify-center items-center p-4 ">
      <div className="grid grid-cols-4 gap-4 w-full ">
        {data.length > 0 &&
          data.map((ele: any) => (
            <Card
              image={ele?.image}
              title={ele?.title}
              price={ele?.price}
              qty={ele?.qty}
              key={ele?.id}
            />
          ))}
      </div>
    </div>
  );
};

export default Products;
