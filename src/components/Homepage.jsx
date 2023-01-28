import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Chatbox from "./Chatbox";

const Homepage = () => {
  const [msg, setMsg] = useState("");
  return (
    <div className="flex flex-col w-screen min-h-screen">
      <Header />
      <div className="flex outline-dashed">
        <Sidebar />
        <Chatbox msg={msg} />
      </div>
    </div>
  );
};

export default Homepage;
