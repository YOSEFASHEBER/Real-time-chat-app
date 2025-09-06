import React from "react";
import Sidebar from "../../sidebar/Sidebar";
import MessageContainer from "../../sidebar/messages/MessaageContainer";

function Home() {
  return (
    // <div className="flex  h-200px sm:h-600px md:h-700px lg:h-1200px rounded-lg overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
    <div className="flex h-screen justify-self-center w-full max-w-7xl  shadow-lg shadow-gray-900/50  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-200/30 ">
      <div className="flex-[1]">
        <Sidebar />
      </div>
      <div className="flex-[3] ">
        <MessageContainer />
      </div>
    </div>
  );
}

export default Home;
