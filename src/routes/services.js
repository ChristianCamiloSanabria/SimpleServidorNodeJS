import Task from "../schema/task.js";
import express from "express";
import {index} from "../views/index_html.js";

const router = express.Router();


//Metodos GET
	
router.get("/",async (req, res) => {
	//res.sendFile('index.html');
	//res.send("Si esta haciendo algo");
	res.send(index);
});

export default router;