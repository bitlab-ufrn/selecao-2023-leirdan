import express from "express";
import { router } from "./router/router";

const server = express();
server.use(router);
server.use(express.json());
server.set("view engine", "ejs");

server.listen(8082, () => {
	console.log("it working!");
});
