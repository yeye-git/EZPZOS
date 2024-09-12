import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { handleSendOTP, handleCompleteOTP } from "../../Services/PublicService";
import { OTPType } from "ezpzos.core";

interface OTPFormProps {
	MobileNumber: string | null;
	otpType: OTPType | null;
	onComplete: (otpToken: string, exp: number, otpTarget: OTPType) => void;
}

const OTPForm: React.FC<OTPFormProps> = ({ MobileNumber, otpType, onComplete }) => {
	const navigate = useNavigate();
	const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
	const [pin, setPin] = useState<string[]>(Array(6).fill(""));
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	useEffect(() => {
		if (inputsRef.current[0]) {
			inputsRef.current[0]?.focus();
		}
	}, []);

	const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		if (/^[0-9]$/.test(value)) {
			const newPin = [...pin];
			newPin[index] = value;
			setPin(newPin);

			if (value.length === 1 && index < inputsRef.current.length - 1) {
				inputsRef.current[index + 1]?.focus();
			}
		}
	};

	const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Backspace" && index > 0 && event.currentTarget.value === "") {
			inputsRef.current[index - 1]?.focus();
		}
	};

	//sending OTP to user's mobile
	const onSendOTP = async () => {
		try {
			await handleSendOTP(MobileNumber || "");
		} catch (error) {
			if (error instanceof Error) {
				setErrorMessage(error.message);
			} else {
				setErrorMessage("An unexpected error occurred.");
			}
		}
	};

	//verifying OTP code
	const onCompleteOTP = async () => {
		try {
			const otp = pin.join("");
			await handleCompleteOTP(MobileNumber || "", otp, otpType, onComplete);
		} catch (error) {
			if (error instanceof Error) {
				setErrorMessage(error.message);
			} else {
				setErrorMessage("An unexpected error occurred.");
			}
		}
	};

	const isPinComplete = pin.join("").length === 6;

	return (
		<div className="flex flex-col items-center w-full h-[880px] bg-[#F3F3F3] rounded-t-lg shadow-lg">
			<div className="w-full flex items-center">
				<button onClick={() => navigate("/signup")} className="">
					<IoCloseOutline size={50} className="drop-shadow-md m-4" />
				</button>
				<p className="text-[24px] font-semibold text-center p-4">Confirm your number</p>
			</div>

			<hr className="border-t-4 border-[#EEEBEB]" />

			<div className="p-4 w-full flex flex-col items-center justify-center">
				<p className="mb-4 text-[15px] self-start">Enter the code we send over SMS to {MobileNumber}:</p>
				<div className="w-[370px] border-[2.5px] border-[#ED897F] pt-1.5 pb-3 rounded-lg my-8">
					<div className="flex items-center justify-center gap-3 bg-[#F3F3F3]">
						{Array.from({ length: 6 }).map((_, index) => (
							<input
								key={index}
								type="tel"
								maxLength={1}
								className="w-10 h-10 text-center text-[24px] bg-[#F3F3F3] font-lato text-[#515151] font-semibold border-b-2 border-b-[#D9D6D6] focus:outline-none"
								ref={el => (inputsRef.current[index] = el)}
								onChange={event => handleInputChange(index, event)}
								onKeyDown={event => handleKeyDown(index, event)}
							/>
						))}
					</div>
				</div>
				{/* TODO: update UI design for errorMessage display */}
				{errorMessage && (
					<p className="text-red-500 text-sm mt-2">{errorMessage}</p> // Display error message here
				)}
				<p className="mt-4 self-start text-[15px]">
					Didn’t get an SMS?{" "}
					<button onClick={onSendOTP} className="inline underline font-semibold border-none bg-transparent">
						Send again
					</button>
				</p>
			</div>

			<div className="w-full flex flex-col mt-36">
				<hr className="border-t-4 border-[#EEEBEB]" />
				<button
					className={`h-[50px] w-[370px] rounded-lg mt-6 self-center ${
						isPinComplete ? "bg-blue-gradient text-white" : "bg-[#D1D4DB] text-white"
					}`}
					type="button"
					disabled={!isPinComplete}
					onClick={onCompleteOTP}
				>
					Continue
				</button>
			</div>
		</div>
	);
};

export default OTPForm;
