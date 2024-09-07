import React from "react";
import Card from "../utils/Card";
import {useGlobalContext} from "../context/GlobalContext";
import {products} from "../data/Products";

function Products() {
  const {productInput, setProductInput, filterResult} = useGlobalContext();
  console.log("filter result ", filterResult);

  return (
    <div className="w-full pb-10">
      <div className="w-full h-full pt-5 px-5 xl:px-20 flex flex-col gap-8 ">
        <p className="text-white text-[18px] font-mono">
          All Products in Videos
        </p>
        {/* search bar  */}
        <div className="w-full h-[50px] bg-white rounded-[10px] overflow-hidden">
          <input
            type="text"
            className="w-full h-full outline-none pl-5"
            placeholder="Enter product name"
            onChange={(e) => {
              setProductInput(e.target.value);
            }}
          />
        </div>
        {/* products */}
        {productInput.trim() !== "" ? (
          <>
            {filterResult.length > 0 ? (
              <div className="w-full min-h-[500px] h-full flex flex-wrap gap-2.5 xl:gap-10 gap-y-5 justify-center mlg:justify-start ">
                {/* cards */}
                {filterResult.map((item, index) => (
                  <Card
                    key={index + 1}
                    link={item?.link}
                    productImage={item?.productImg}
                    productName={item?.productName}
                  />
                ))}
              </div>
            ) : (
              <div className="w-full min-h-[500px] h-full flex items-center rounded-md justify-center bg-white ">
                <p className="text-[30px] font-bold font-handjet">
                  No product found...
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="w-full h-full flex flex-wrap gap-2.5 xl:gap-10 gap-y-5 justify-center mlg:justify-start ">
            {/* cards */}
            {products.map((item, index) => (
              <Card
                key={index + 1}
                link={item?.link}
                productImage={item?.productImg}
                productName={item?.productName}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
