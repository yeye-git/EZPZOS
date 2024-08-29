import { DefaultLoginSignupValues } from "ezpzos.core";

const Policy: React.FC = () => {
	return (
		<div className="max-w-screen-sm text-center mx-auto">
			<p className="text-[#DCDCDCD6] mt-20 font-bld">
				{DefaultLoginSignupValues.PolicyDefaultValue.HeadingDefaultValue}
			</p>
			<div className="flex justify-around text-[#777373] text-[14px] mt-2 font-bold underline decoration-solid">
				<a href="#">{DefaultLoginSignupValues.PolicyDefaultValue.TermsDefaultValue}</a>
				<a href="#">{DefaultLoginSignupValues.PolicyDefaultValue.PrivacyDefaultValue}</a>
				<a href="#">{DefaultLoginSignupValues.PolicyDefaultValue.ContentDefaultValue}</a>
			</div>
		</div>
	);
};

export default Policy;
