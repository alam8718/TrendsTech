import React from "react";
import TopPart from "./TopPart";
import Products from "./Products";
import Footer from "../utils/Footer";

function Home() {
  return (
    <div className="w-full h-screen flex justify-center overflow-y-auto">
      <div className="w-full  flex flex-col gap-5 items-center mt-10">
        {/* top part */}
        <TopPart />
        {/* products show part */}
        <Products />
        {/* footer */}
        <Footer />
      </div>
    </div>
  );
}

export default Home;
