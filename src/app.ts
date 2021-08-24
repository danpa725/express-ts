import * as express from "express";
import { CatInfos } from "./app.model";

const app: express.Express = express();

//미들웨어: 가장 처음으로 처리하는 라우터!
//! 라우터는 순차적으로 실행 -> 실행 순서 및 위치가 중요.
app.use((req, res, next) => {
    // 로깅 미들웨어
    console.log(req.rawHeaders[0]);
    next();
});

app.get("/", (req: express.Request, res: express.Response) => {
    res.send({
        message: "server init at 8000 port",
    });
});

app.get("/cats", (req, res, next) => {
    console.log({
        cats: "CatInfo를 출력합니다.",
    });
    next();
});

app.get("/cats", (req, res) => {
    res.send({
        cats: CatInfos,
    });
});

// 에러 처리 라우터
app.use((req, res, next) => {
    res.send({
        error: 404,
    });
});

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`port : ${PORT}에서 서버가 열림`);
});
