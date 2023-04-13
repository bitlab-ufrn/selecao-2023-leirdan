import Filter from "bad-words";
import { Request, Response } from "express";

export const filterFunc = (content: string): Promise<String> => {
	let msg: any;
	const filter = new Filter({ placeHolder: "x" });
	filter.addWords("&&&&", "****");
	return msg;
};
