import React from "react";
import TopNav from "../../Components/TopNav";
import BottomNavBar from "../../Components/BottomNavBar";

// This it fake substitution page for profile. Used only in bottom nav bar.
const Profile: React.FC = () => {
    return(
        <div className="flex flex-col items-center">
            <TopNav />
            <BottomNavBar isClient/>
        </div>
    )
}


export default Profile