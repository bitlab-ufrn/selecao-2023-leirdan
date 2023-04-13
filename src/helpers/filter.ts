import { Request, Response } from "express";
import { data } from "../db/data";

export const filterFunc = async (content: String, req: Request, res: Response) => {
	let badWords = [];
	try {
		data.forEach((word) => {
			if (content?.includes(word)) {
				badWords.push(word);
			}
		});

		if (badWords.length > 0) {
			return res.json({
				msg: `Cuidado, há expressões ofensivas nesse texto. Há um total de ${badWords.length} palavras.`
			});
		} else {
			return res.json({
				msg: "Verificamos que não há ofensa alguma no texto, pode enviá-lo com segurança."
			});
		}
	} catch (err) {
		console.log(err);
	}
};
