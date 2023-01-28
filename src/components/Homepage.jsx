import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Chatbox from "./Chatbox";

const Homepage = () => {
  return (
    <div className="w-full h-full">
      <Header />
      <div className="flex w-screen h-screen outline-dashed justify-center">
        <Sidebar />
        <Chatbox />
      </div>
    </div>
  );
};

export default Homepage;
