export function score(word: string): number {
	if (typeof word !== "string") return 0;
	const scoreSheet: Record<string, RegExp> = {
		1: /[AEIOULNRST]/i,
		2: /[DG]/i,
		3: /[BCMP]/i,
		4: /[FHVWY]/i,
		5: /[K]/i,
		8: /[JX]/i,
		10: /[QZ]/i,
	};
	if (word.split(" ").length > 1)
		return word.split(" ").reduce((acc, w) => (acc += score(w)), 0);
	return word.split("").reduce((acc, letter) => {
		for (const score in scoreSheet) {
			if (scoreSheet[score].test(letter)) {
				acc += +score;
				break;
			}
		}
		return acc;
	}, 0);
}
