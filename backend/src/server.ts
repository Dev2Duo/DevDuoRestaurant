import express, { json, Request, Response, urlencoded } from "express";
const port = process.env.PORT;
const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));

//Database
import "./config/db.ts"


app.get("/", (req: Request, res: Response) => {
	res.status(200).json({ msg: "Hello World" });
});

app.listen(port, () => {
	console.log("Server Started!");
});
