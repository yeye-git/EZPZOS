import React, { useState } from "react";
import "../index.css";
import { AiOutlineScan } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

/**
 * This is the component of top-navigator,including scanning,searching and sideBar list.
 * @param hideSearch is the TopNavProps which as a boolean value for its parent component to control the display of the search function.
 * Sidebar is the child of this components so that topNav can control the visibility of it.
 */
interface TopNavProps {
  hideSearch?: boolean;
}

export default function TopNav({ hideSearch = false }: TopNavProps) {
  //if sideBarVisible is true, sideBar can be seen,otherwise it is invisible.
  const [sideBarVisible, setSidebarVisible] = useState(false);
  const toogleSidebar = () => {
    setSidebarVisible(!sideBarVisible);
  };
  return (
    <div className="w-full">
      <Sidebar sideBarVisible={sideBarVisible} closeSidebar={toogleSidebar} />
      <div className="bg-nav-bar-gradient w-full h-[142px] flex">
        {/*AiOutlineScan is the icon of scanning */}
        <Link to="/scan" className="w-2/4 text-white mt-14">
          <AiOutlineScan className="text-5xl ml-3 cursor-pointer" />
        </Link>
        {/*FiAlignJustify is the icon of sideBar list,  
                    IoSearch is the icon of searching
                */}
        <div className=" w-2/4 flex text-5xl flex-row-reverse text-white mt-14">
          <FiMenu
            className="mr-3"
            onClick={toogleSidebar}
            style={{ display: sideBarVisible ? "none" : "block" }}
          />
          {!hideSearch && (
            <IoSearch
              className="mr-3"
              style={{ display: sideBarVisible ? "none" : "block" }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
