import { Router } from "express";

const router = Router();

router.get("/index", (req, res) => {
	res.send("<h3> hello there! </h3>");
});

export { router };
