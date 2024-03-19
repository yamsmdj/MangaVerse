import React from "react";
import Navbar from "./Header";

const index = ({children}) => {
  return (
    <div className=" bg-gray-400 w-screen h-screen flex flex-col">
          <Navbar></Navbar>
          <div className="h-full">{children}</div>
    </div>
  );
};

export default index;
