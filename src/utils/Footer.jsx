import React from "react";

function Footer() {
  return (
    <footer className="w-full py-5 text-white text-center border-t  border-gray-400  ">
      <p className=" ">{`Copyright © ${new Date().getFullYear()} Tech Trends 24/7`}</p>
    </footer>
  );
}

export default Footer;
