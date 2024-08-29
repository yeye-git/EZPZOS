import { IoCheckmark, IoClose } from "react-icons/io5";

interface AlertTagProps {
	alertMessage: string | undefined;
	isError?: boolean;
}

const AlertTag: React.FC<AlertTagProps> = ({ alertMessage, isError = false }) => {
	return (
		<div
			className={
				"absolute top-[108px] left-1/2 w-[336px] h-[77px] transform -translate-x-1/2 rounded-[20px] bg-[#FFFFFF]/90 flex items-center" 
			}
		>
			<p className={`text-xl ${isError ? "text-red-500" : "text-[#235DB5]"} ml-[16px] mr-[60px] overflow-hidden text-ellipsis`}>
				{alertMessage}
			</p>
			{isError ? (
                <IoClose className="w-[43px] h-[43px] text-white bg-[#EF7221] border-none rounded-full absolute top-[17px] right-[21px]" />
            ) : (
                <IoCheckmark className="w-[43px] h-[43px] text-white bg-[#65C55D] border-none rounded-full absolute top-[17px] right-[21px]" />
            )}
		</div>
	);
};

export default AlertTag;
