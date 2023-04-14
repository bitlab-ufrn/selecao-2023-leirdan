import { Request, Response, response } from "express";
import { filterFunc } from "../helpers/filter";

export default class filterController {
	public async index(req: Request, res: Response) {
		res.render("pages/index");
	}

	public async sendToFilter(req: Request, res: Response) {
		const content = req.body?.content;
		try {
			const result = filterFunc(content, req);
			if (result !== undefined) {
				res.render("pages/report", { response: result });
			}
		} catch (err) {
			console.error(err);
		}
	}
}
