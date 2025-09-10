import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { use } from "react";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  // Reset selected conversation when the conversation list changes

  useEffect(() => {
    return () => {
      setSelectedConversation(null);
    };
    // console.log("Selected conversation reset due to page reload or login");
  }, []);
  return (
    <div className=" md:min-w-[450px] h-[100vh] flex flex-col mt-auto pt-0.5 pb-1  justify-center">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-slate-500 m px-4 py-2 rounded-t-lg border-b-2 border-gray-300 overflow-hidden">
            <span className="label-text">To:</span>{" "}
            <span className="text-gray-900 font-bold">
              {" "}
              {selectedConversation.fullName}
            </span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};
export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex  justify-center  w-full h-full items-center">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser.fullName} ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
