import { error } from "console";
import * as express from "express";
import { CatInfos } from "./app.model";
import { CatInfo } from "./types/types";

const app: express.Express = express();
//* body-parser: json 미들웨어
app.use(express.json());

//* logging middleware
app.use((req, res, next) => {
    // 로깅 미들웨어
    console.log(req.rawHeaders[0]);
    next();
});

//* Read: 고양이 전체 데이터
app.get("/cats", (req, res) => {
    try {
        //* DB 서버에서 cats 데이터 조회 가정
        const cats = CatInfos;

        //* 상태 status()로 200 성공 주기
        res.status(200).send({
            success: true,
            data: { cats },
        });
    } catch (error) {
        //* 상태 status()로 400 실패 주기
        res.status(400).send({
            success: false,
            message: "고양이 데이터 조회 실패",
        });
    }
});

//*Read: 고양이 ID로 조회하기
//! :id param전달
app.get("/cats/:id", (req, res) => {
    //* params에서 id 추출
    const catId = req.params.id;

    try {
        const specificCat = CatInfos.find((cat) => cat.id === catId);

        res.status(200).send({
            success: true,
            data: {
                cat: specificCat,
            },
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            message: error,
        });
    }
});

//*Create: 새로운 고양이 추가
app.post("/cats", (req, res) => {
    try {
        //* body로 전달된 데이터 조회
        const catData: CatInfo = req.body;

        const updatedData = [...CatInfos, catData];

        //* 상태 status()로 200 성공 주기
        res.status(200).send({
            success: true,
            data: { updatedData },
        });
    } catch (error) {
        //* 상태 status()로 400 실패 주기
        res.status(400).send({
            success: false,
            message: "고양이 추가 실패",
        });
    }
});

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
