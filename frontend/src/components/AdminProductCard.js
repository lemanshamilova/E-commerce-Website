import React, { useState } from "react";
import { MdModeEdit } from "react-icons/md";
import AdminEditProduct from "./AdminEditProduct";
import displayINRCurrency from "../helpers/displayCurrency";

const AdminProductCard = ({ data, index, fetchdata }) => {
  const [editProduct, setEditProduct] = useState(false);
  return (
    <div key={index} className=" p-4 rounded bg-white ">
      <div className="w-40">
        <div className="w-32 h-32 flex justify-center items-center">
          <img src={data?.productImage[0]} alt="img" className="mx-auto object-fill h-full" />
        </div>
        <h1 className="text-ellipsis line-clamp-1">{data?.productName}</h1>

        <div>
          <p className="font-semibold">
            {displayINRCurrency(data.sellingPrice)}
          </p>

          <div
            className="w-fit ml-auto p-2 bg-green-100 hover:bg-green-600 rounded-full hover:text-white cursor-pointer"
            onClick={() => setEditProduct(true)}
          >
            <MdModeEdit />
          </div>
        </div>
      </div>

      {editProduct && (
        <AdminEditProduct
          productData={data}
          onClose={() => setEditProduct(false)}
          fetchdata={fetchdata}
        />
      )}
    </div>
  );
};

export default AdminProductCard;
