import * as express from "express";
import catRouter from "./cats/router/cat.router";

const app: express.Express = express();
//* body-parser: json 미들웨어
app.use(express.json());

//* logging middleware
app.use((req, res, next) => {
    // 로깅 미들웨어
    console.log(req.rawHeaders[0]);
    next();
});

//* catRouter 분리
app.use(catRouter);

//* error handling middleware
app.use((req, res, next) => {
    res.send({
        error: 404,
    });
});

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`port : ${PORT}에서 서버가 열림`);
});
