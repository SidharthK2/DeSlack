import React from "react";
import { useMoralis } from "react-moralis";

const ChatBubble = ({ sender, msg }) => {
  const { account } = useMoralis();
  function computeStyle() {
    let style;
    if (account.toString() == sender.toString()) {
      style = { marginLeft: 20 };
    }
  }
  return (
    <>
      <div className="chat-bubble w-fit h-fit p-2 m-4">
        It's over Anakin, I have the high ground.
        {msg}
      </div>
    </>
  );
};

export default ChatBubble;
