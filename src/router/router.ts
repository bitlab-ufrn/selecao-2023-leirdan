import { Router } from "express";
import * as express from "express";
import filterController from "../controller/FilterController";

const filterCtrl = new filterController();
const router = Router();

router.get("/", filterCtrl.index);

router.post("/report", express.urlencoded(), filterCtrl.report);

export { router };
