import { Request, Response } from "express";
import { filterFunc } from "../helpers/filter";

export default class filterController {
	public async index(req: Request, res: Response) {
		res.render("pages/index");
	}
	public async sendToFilter(req: Request, res: Response) {
		const content = req.body.content;
		await filterFunc(content)
			.then((msg) => {
				res.send(msg);
			})
			.catch((err) => {
				console.error(err);
			});
	}
}
