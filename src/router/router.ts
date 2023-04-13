import { Router } from "express";
import { filterFunc } from "../helpers/filter";
import filterController from "../controller/FilterController";

const filterCtrl = new filterController();
const router = Router();

router.get("/home", filterCtrl.index);

router.post("/home", filterCtrl.sendToFilter);

export { router };
