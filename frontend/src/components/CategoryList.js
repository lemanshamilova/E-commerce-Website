import React, { useEffect, useState } from "react";
import SummaryApi from "../common";

const CategoryList = () => {
  const [categoryProduct, setCategoryProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCategoryProduct = async () => {
    setLoading(true);
    const response = await fetch(SummaryApi.categoryProduct.url, {
      method: SummaryApi.categoryProduct.method,
      credentials: "include",
    });

    const dataResponse = await response.json();
    setLoading(false);
    setCategoryProduct(dataResponse.data);

    console.log(categoryProduct);
  };

  useEffect(() => {
    fetchCategoryProduct();
  }, []);
  return (
    <div className="container mx-auto p-4 ">
      <div className="flex items-center gap-4 justify-between">
        {categoryProduct.map((product, index) => {
          return (
            <div key={index} className="">
              <div className="w-20 h-20 rounded-full overflow-hidden p-3 bg-white flex items-center justify-center ">
                <img src={product?.productImage[0]} alt={product?.productImage} className="h-full object-fill"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;
