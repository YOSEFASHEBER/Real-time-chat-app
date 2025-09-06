import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import toast from "react-hot-toast";
import { set } from "mongoose";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { sendMessage, loading } = useSendMessage();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("this is message", message);
    if (message.trim() === "") {
      console.log("message got trimmed");
      toast.error("Message cannot be empty");
      return;
    }
    console.log("sending message", message);
    await sendMessage(message);
    setMessage("");
  };
  return (
    <form className="px-2  my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white"
          placeholder="Send a message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <BsSend />
          )}
        </button>
      </div>
    </form>
  );
};
export default MessageInput;
