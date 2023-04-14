import express from "express";
import { router } from "./router/router";
import dotenv from "dotenv";
dotenv.config();

const server = express();
server.use(router);
server.use(express.json());
server.use(express.urlencoded());
server.set("view engine", "ejs");

server.listen(process.env.PORT, () => {
	console.log("it works!");
});
