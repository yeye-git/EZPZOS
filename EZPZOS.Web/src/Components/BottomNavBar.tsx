import React from "react";
import { useNavigate } from "react-router-dom";
// import { RiHome2Line } from "react-icons/ri"; // discarded home icon
// import { TbClipboardText } from "react-icons/tb"; // discarded menu icon
// import { PiHandbag } from "react-icons/pi"; // discarded take away icon
import HomeIcon from "../Assets/Icons/BottomNavBarHomeIcon.png"; // home
import { FaDove, FaUser } from "react-icons/fa6"; //  profile
import { PiForkKnifeBold } from "react-icons/pi"; // kitchen icon
import MenuIcon from "../Assets/Icons/BottomNavBarMenuIcon.png"; // menu icon
import TakeAwayIcon from "../Assets/Icons/BottomNavBarTakeAwayIcon.png"; // take away icon

/*
  Read me first before and modification on this component.
  
  This component is to render the bottom nav bar, which mounted at the bottom in every necessary pages.
  - Key prop to switch the display content: isClient: boolean.
  - Two key objs for icons and hooks: (invoked in the jsx return, need extra attention)
      - businessNavBar
      - clientNavBar
  
  Necessarily invoked in App.tsx. 
  Need extra attention with icon folder, all placeholders, Routes.tsx as they are closely related.

  Good luck with your codes.
*/

interface BottomNavBarProps {
  isClient: boolean;
}

const BottomNavBar: React.FC<BottomNavBarProps> = ({ isClient }) => {
  const businessNavBar = {
    iconList: [HomeIcon, <PiForkKnifeBold />, MenuIcon, <FaUser />],
    wordList: ["HOME", "KITCHEN", "MENU", "PROFILE"],
    pathList: ["/", "/kitchen", "/menu", "/profile"],
  };

  const clientNavBar = {
    iconList: [HomeIcon, MenuIcon, TakeAwayIcon, <FaUser />],
    wordList: ["Home", "Menu", "Take away", "Profile"],
    pathList: ["/", "/menu-dinein", "/menu-takeaway", "/profile"],
  };

  const navBar = isClient ? clientNavBar : businessNavBar;
  const navigate = useNavigate();

  // The key function to render the icon.
  const renderIcon = (icon: any, alt: string, className: string) => {
    if (typeof icon === "string") {
      // img icon
      return <img src={icon} alt={alt} className={className} />;
    } else {
      // react icon component
      return React.cloneElement(icon, { className });
    }
  };

  // console.log('here i am')
  return (
    <div className="bg-[#D9D9D9] pt-[8px] text-[#988B8B] w-full h-[88px] flex bottom-0 text-center fixed justify-center px-[10%] gap-0">
      <div className=" w-full h-[51px] flex justify-between padding-0">
        {navBar.iconList.map((icon, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => navigate(navBar.pathList[index])}
          >
            {/* here are two divs for each page: icon div + text span div. In the icon div, the flex items-center are to centralize the icon */}
            <div className="h-[30px] flex items-center">
              {/* Invoke the renderIcon function*/}
              {renderIcon(
                icon,
                navBar.wordList[index],
                "h-full w-full object-contain"
              )}
            </div>
            <span className="font-istok text-[14px] font-thin leading-[21px] text-center">
              {navBar.wordList[index]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomNavBar;
