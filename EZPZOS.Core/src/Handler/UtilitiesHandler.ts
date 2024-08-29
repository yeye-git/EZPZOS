// Assuming the phone number is an Australian number without country code
export class PhoneNumberNormalizer {
	private phoneNumber: string;

	constructor(phoneNumber: string) {
		this.phoneNumber = phoneNumber;
	}

	public normalize(): string {
		if (this.phoneNumber.startsWith("0")) {
			return `+61${this.phoneNumber.substring(1)}`;
		} else if (this.phoneNumber.startsWith("4")){
			return `+61${this.phoneNumber.substring(0)}`
		}
		return this.phoneNumber;
	}
}
