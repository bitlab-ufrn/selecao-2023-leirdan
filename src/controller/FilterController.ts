import { Request, Response, response } from "express";
import { filterFunc } from "../helpers/filter";

export default class filterController {
	public async index(req: Request, res: Response) {
		res.render("pages/index");
	}

	public async report(req: Request, res: Response) {
		const content = req.body?.content;
		if (content == " ") {
			res.redirect("/home");
		} else {
			try {
				const result = filterFunc(content, req);
				if (result !== undefined) {
					res.render("pages/report", { response: result });
				}
			} catch (err) {
				return err;
			}
		}
	}
}
