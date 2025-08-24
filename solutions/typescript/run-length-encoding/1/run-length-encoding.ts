export function encode(msg: string): string {
	if (msg.length <= 1) return msg;
	const result: Array<String> = [];
	const msgArr = msg.split("");
	let sameCharCount = 1;
	do {
		if (msgArr.length < 2 || msgArr[0] !== msgArr[1]) {
			result.push((sameCharCount === 1 ? "" : sameCharCount) + msgArr[0]);
			sameCharCount = 1;
		} else {
			sameCharCount++;
		}
		msgArr.shift();
	} while (msgArr.length > 0);
	return result.join("");
}

export function decode(msg: string): string {
	if (msg.length <= 1) return msg;
	let msgCopy = msg;
	const result: Array<string> = [];
	do {
		const char = msgCopy.match(/^[a-z\s]+/i);
		if (char) {
			result.push(char.toString());
			msgCopy = msgCopy.replace(char.toString(), "");
		} else {
			const count = msgCopy.match(/^[0-9]+/);
			if (count) {
				msgCopy = msgCopy.replace(count.toString(), "");
				result.push(msgCopy[0].padEnd(+count.toString(), msgCopy[0]));
				msgCopy = msgCopy.slice(1);
			}
		}
	} while (msgCopy.length > 0);
	return result.join("");
}