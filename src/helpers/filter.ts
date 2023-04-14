import { Request } from "express";
import { data } from "../db/data";

export const filterFunc = (content: string, req: Request) => {
	let badWords: Array<string> = [];
	try {
		data.forEach((word) => {
			if (content?.toLocaleUpperCase().includes(word.toLocaleUpperCase())) {
				badWords.push(word);
			}
		});
		if (badWords.length > 0) {
			for (let i = 0; i < badWords.length; i++) {
				badWords[i] = " " + badWords[i][0].toUpperCase() + badWords[i].substring(1);
			}
			badWords.join(",");
			return `Cuidado, há as seguintes expressões ofensivas nesse texto: ${badWords}`;
		} else {
			return "Verificamos que não há ofensa alguma no texto, pode enviá-lo com segurança.";
		}
	} catch (err) {
		console.log(err);
	}
};
