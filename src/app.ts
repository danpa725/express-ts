// Namespace import
import express from "express";

const app: express.Express = express();

const PORT = 8000;

app.get("/", (req: express.Request, res: express.Response) => {
    res.send("안녕하세요");
});

app.listen(PORT, () => {
    console.log(`port : ${PORT}에서 서버가 열림`);
});
