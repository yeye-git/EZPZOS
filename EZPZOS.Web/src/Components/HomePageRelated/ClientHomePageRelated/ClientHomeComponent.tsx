import { ClientHomePageValuesProp } from "../../../Pages/Home";
import { DefaultHomePageValues } from "ezpzos.core";
import Logo from "../../../Assets/Images/Logo.png";
import ClientAvatar from "../../../Assets/Icons/ClientAvatar.png";
import HomePageButtons from "../HomePageButtons";
import HomePageNotification from "../HomePageNotification";
import LogoWithName from "../../../Assets/Images/LogoWithName.png";
import { Link } from "react-router-dom";

/**
 * @param isLoggedIn is a variable to store login status data that passed from EZPZ.CORE ClientPageValuesProp constant,
 * @param data pass a DefaultClientHomePageValues mock data  into Client Home Component.
 */

const ClientHomeComponent = (data: ClientHomePageValuesProp) => {
	const isLoggedIn = data.ClientHomePageValues.IsLoggedIn;

	const loggedInLogo = <img src={ClientAvatar} className="w-[110px] h-[110px] mt-32" alt="logo" />;

	const notLoggedInLogo = (
		<div>
			<img src={Logo} className="w-[90px] h-[100px] mt-44" alt="logo" />
			<p className="text-2xl font-bold bg-gradient-to-b from-[#FFFFFF] to-[#FFB682F5] text-transparent bg-clip-text">
				{DefaultHomePageValues.NotLoggedInLogo}
			</p>
		</div>
	);

	const loggedInOpening = (
		<div>
			<p className="text-3xl font-black mt-8 bg-gradient-to-r from-[#CDE1FF] to-[#E56923] text-transparent bg-clip-text">
				{DefaultHomePageValues.LoggedInOpening[0]}
			</p>
			<p className="text-sm font-bold bg-gradient-to-r text-center from-[#FBFBFB] to-[#959595] text-transparent bg-clip-text mt-1">
				{DefaultHomePageValues.LoggedInOpening[1]}
			</p>
		</div>
	);

	const BottomLogo = (
		<div>
			<img src={LogoWithName} className="mt-24" alt="logo" />
		</div>
	);

	const notificationlist = (
		<div className="flex flex-col items-center w-4/5 mt-6">
			{/*get HomePageNotification from data variable and use map to display each HomePageNotification*/}
			{data.ClientHomePageValues.NotificationList.map((data: any, index: any) => {
				return <HomePageNotification key={index} title={data.title} content={data.content} />;
			})}
		</div>
	);

	const notLoggedInSignInButton = (
		<div className="flex-col">
			<Link to="login">
				<button className="h-[50px] w-[370px] rounded-lg mt-14 text-[#FFFFFF] text-xl bg-gradient-to-r from-[#FFB682F5] via-[#F8A27AF5] to-[#F28C83F5]">
					{DefaultHomePageValues.NotLoggedInSignInButton.SignInButtonDefualtValue}
				</button>
			</Link>
			<div className="mt-4">
				<span className=" text-[#dcdcdcbb] ">
					{DefaultHomePageValues.NotLoggedInSignInButton.OfferSignUpDefaultValue}
				</span>
				<Link to="signup" className="font-bold text-[#dcdcdcbb] ">
					{DefaultHomePageValues.NotLoggedInSignInButton.SignUpButtonDefaultValue}
				</Link>
			</div>
		</div>
	);

	return (
		<div className="w-full flex flex-col justify-center items-center">
			{isLoggedIn ? loggedInLogo : notLoggedInLogo}
			{isLoggedIn ? loggedInOpening : ""}

			{/*get HomePageButtonList from data variable and use map to display each homepage button*/}
			<div className="flex gap-16">
				{data.ClientHomePageValues.HomePageButtonList.map((data, index) => {
					return <HomePageButtons key={index} img={data.Img} title={data.Title} />;
				})}
			</div>

			{isLoggedIn ? notificationlist : ""}
			{isLoggedIn ? BottomLogo : ""}
			{isLoggedIn ? "" : notLoggedInSignInButton}
		</div>
	);
};

export default ClientHomeComponent;
