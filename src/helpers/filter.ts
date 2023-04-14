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
			return `Cuidado, há palavras ofensivas nesse texto.`;
		} else {
			return "Verificamos que não há ofensa alguma no texto, pode enviá-lo com segurança.";
		}
	} catch (err) {
		console.log(err);
	}
};
