interface HomePageButtonProps {
	img: string;
	title: string;
}
/**
 * This interface defining the properties for the HomePageButton.
 * @param title is to store the HomePageButton's title.
 * @param img is to store the HomePageButton's img url string.
 */
const HomePageButtons = (props: HomePageButtonProps) => {
	return (
		<div>
			<div className="w-full flex justify-center items-center gap-10 mt-12">
				<div className="flex flex-col items-center gap-2 ">
					<img src={require(`../../Assets/Icons/${props.img}`)} className="w-[70px] h-[80px]" alt="logo" />

					<div className="text-white">{props.title}</div>
				</div>
			</div>
		</div>
	);
};

export default HomePageButtons;
