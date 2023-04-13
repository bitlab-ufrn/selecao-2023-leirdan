import { Router } from "express";

const router = Router();

router.get("/index", (req, res) => {
	res.render("pages/index");
});

export { router };
