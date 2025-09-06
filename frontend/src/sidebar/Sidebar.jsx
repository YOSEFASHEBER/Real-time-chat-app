import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogOutButton from "./LogoutButton";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full  p-2  border-r border-gray-200/30 ">
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <LogOutButton />
    </div>
  );
};

export default Sidebar;
