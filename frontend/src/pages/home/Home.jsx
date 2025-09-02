import React from "react";
import Sidebar from "../../sidebar/Sidebar";
import MessageContainer from "../../sidebar/messages/MessaageContainer";

function Home() {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar />
      <MessageContainer />
    </div>
  );
}

export default Home;
