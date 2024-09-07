import React from "react";
import {Link} from "react-router-dom";

function Card({productImage, productName, link}) {
  return (
    <Link
      to={link}
      target="_blank"
      className="bg-white w-[300px] h-[250px] rounded-[10px] overflow-hidden flex flex-col justify-around items-center relative group">
      {/* overlay */}
      <p className="absolute w-full h-full bg-black/10 hidden group-hover:block"></p>
      <img src={productImage} alt="" className="w-[100px] rounded-md" />
      <p className="text-[16px] font-medium">{productName}</p>
    </Link>
  );
}

export default Card;
