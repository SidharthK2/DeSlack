import React from "react";
import ChatBubble from "./ChatBubble";

const Chatbox = ({ msg }) => {
  return (
    <div className="outline-dashed p-2 flex flex-col w-screen h-screen items-stretch">
      <div className="chats flex-grow">
        <ChatBubble msg={msg} />
      </div>
      <div className="textarea outline-dashed h-3 w-1/3 bg-slate-300 text-gray-900">
        Text area
      </div>
    </div>
  );
};

export default Chatbox;
