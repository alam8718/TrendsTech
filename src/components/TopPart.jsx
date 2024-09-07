import React from "react";
import {AiFillTikTok, AiFillYoutube} from "react-icons/ai";
import {BsFacebook} from "react-icons/bs";
import {Link} from "react-router-dom";

function TopPart() {
  return (
    <div className="py-5 w-[300px] h-[350px] bg-[#2D2F39] rounded-[10px] flex flex-col items-center justify-center">
      <div className="w-[120px] h-[120px] rounded-full object-cover overflow-hidden">
        <img src="/image/logo.jpg" alt="logo" />
      </div>
      {/* details */}
      <div>
        {/* title */}
        <p className="font-handjet text-white text-[36px] font-bold tracking-wide text-center">
          Tech Trends 24 / 7
        </p>
        {/* logos */}
        <div className="w-full flex gap-2 justify-center items-center text-gray-400">
          <Link
            to={"https://www.tiktok.com/@techtrens24"}
            target="_blank"
            className="hover:text-gray-300">
            <AiFillTikTok size={30} />
          </Link>
          <Link
            to={"https://www.youtube.com/channel/UCrsKEu9JkfhlpjV6rYo1fNg"}
            target="_blank"
            className="hover:text-gray-300">
            <AiFillYoutube size={30} />
          </Link>
          <Link
            to={"https://www.facebook.com/profile.php?id=61565490775197"}
            target="_blank"
            className="hover:text-gray-300">
            <BsFacebook size={25} />
          </Link>
        </div>
        {/*  */}
        <p className="text-white tracking-wider text-center text-[14px] pt-4">
          Affiliate Marketer
        </p>
        <p className="text-white tracking-wider text-center text-[14px] ">
          As an Affiliate, I earn from qualifying purchases 👋👋
        </p>
      </div>
    </div>
  );
}

export default TopPart;
