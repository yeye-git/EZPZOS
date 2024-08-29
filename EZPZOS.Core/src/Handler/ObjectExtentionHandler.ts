export const First = <T>(
	dic: { [name: string]: T },
	callback: Function
): T | null => {
	for (let name in dic) {
		if (dic.hasOwnProperty(name)) {
			callback(dic[name]);
			return dic[name];
		}
	}
	return null;
};

export function Where<T>(
	dic: { [name: string]: T },
	callback: Function
): { [name: string]: T };
export function Where<T>(arr: T[], callback: Function): T[];
export function Where<T>(obj: unknown, callback: Function): unknown {
	if (typeof obj === "object") {
		let tempDic: { [name: string]: T } = {};
		for (let key in obj as { [name: string]: T }) {
			let tempObj = tempDic[key];
			if (!callback(tempObj)) {
				tempDic[key] = tempObj;
			}
		}
		return tempDic;
	}  else {
		return null;
	}
}

export function ToArray<T>(dic: { [name: string]: T }): T[];
export function ToArray<T>(dic: unknown): T[] {
	let arr:T[] = [];
	if (typeof dic === "object") {
		let tempDic = dic as { [name: string]: T };
		for (let name in tempDic) {
			if (tempDic.hasOwnProperty(name)) {
				arr.push(tempDic[name]);
			}
		}
	}
	return arr;
}

export function Any<T>(dic: { [name: string]: T }, callback: Function): Boolean;
export function Any<T>(arr: T[], callback: Function): Boolean;

export function Any<T>(obj: unknown, callback: Function): Boolean {
	if (typeof obj === "object") {
		let tempDic = obj as { [name: string]: T };
		for (let key in tempDic) {
			let tempObj = tempDic[key];
			if (callback(tempObj)) {
				return true;
			}
		}
	} 
	return false;
}

export function All<T>(dic: { [name: string]: T }, callback: Function): Boolean;
export function All<T>(arr: T[], callback: Function): Boolean;

export function All<T>(obj: unknown, callback: Function): Boolean {
	if (typeof obj === "object") {
		let tempDic = obj as { [name: string]: T };
		for (let key in tempDic) {
			let tempObj = tempDic[key];
			if (!callback(tempObj)) {
				return false;
			}
		}
	} 
	return true;
}
export function Count<T>(arr: T[], callback: Function): number {
	let count = 0;
	for (let tempObj of arr) {
		if (callback(tempObj)) {
			count++;
		}
	}
	return count;
}

export function Max<T>(dic: { [name: string]: number }): string {
	let max = 0;
	let name = "";
	for (let key in dic) {
		let temp = dic[key];
		if (temp > max) {
			max = temp;
			name = key;
		}
	}
	return name;
}

export function IndexOf<T>(
	dic: { [name: string]: number },
	name: string
): number {
	let index = 0;
	for (let key in dic) {
		if (key == name) {
			return index;
		}
		index++;
	}
	return -1;
}
