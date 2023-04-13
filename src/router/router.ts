import { Router } from "express";
import * as express from "express";
import filterController from "../controller/FilterController";

const filterCtrl = new filterController();
const router = Router();

router.get("/home", filterCtrl.index);

router.post("/home", express.urlencoded(), filterCtrl.sendToFilter);

export { router };
