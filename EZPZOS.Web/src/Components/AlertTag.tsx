import { IoCheckmark, IoClose } from "react-icons/io5";

interface AlertTagProps {
	alertMessage: string | undefined;
	isError?: boolean;
}

/**
 * The `AlertTag` component is responsible for displaying alert messages in the application.
 * It can show either a success or an error message, depending on the `isError` prop.
 *
 * @param alertMessage - The message to be displayed inside the alert. It can be a success or error message.
 * @param isError - A boolean that determines the style of the alert. 
 * If `true`, the alert is styled as an error with x icon and red-orange background. 
 * If `false`, the alert is styled as a success with tick icon and green background. 
 * The default value is `false` (success).
 */

const AlertTag: React.FC<AlertTagProps> = ({ alertMessage, isError = false  }) => {
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
