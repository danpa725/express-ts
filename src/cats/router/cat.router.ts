import { Router } from "express";
import { CatInfo } from "../../types/types";
import { CatInfos } from "../cat.model";

//! Router 분리
const catRouter = Router();

//* Read: 고양이 전체 데이터
catRouter.get("/cats", (req, res) => {
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
catRouter.get("/cats/:id", (req, res) => {
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
            message: "고양이 조회 실패",
        });
    }
});

//*Create: 새로운 고양이 추가
catRouter.post("/cats", (req, res) => {
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

//*Update: 고양이 데이터 업데이트 -> Put
catRouter.put("/cats/:id", (req, res) => {
    //* params에서 id 추출
    const catId = req.params.id;
    const catData: CatInfo = req.body;

    try {
        const updatedCatIdx = CatInfos.findIndex((cat) => cat.id === catId);
        const updatedCatData = [...CatInfos];
        updatedCatData.splice(updatedCatIdx, 1, catData);

        res.status(200).send({
            success: true,
            data: {
                updatedCat: updatedCatData,
            },
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            message: "고양이 데이터 업데이트 실패",
        });
    }
});

//*Update: 고양이 데이터 부분 업데이트 -> Patch
catRouter.patch("/cats/:id", (req, res) => {
    //* params에서 id 추출
    const catId = req.params.id;
    const updatedCatInfo = req.body;

    try {
        const catData = [...CatInfos];
        const updatedCatData = catData.map((data) => {
            if (data.id === catId) return { ...data, ...updatedCatInfo };
            return data;
        });

        res.status(200).send({
            success: true,
            data: {
                updatedCat: updatedCatData,
            },
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            message: "고양이 데이터 일부 업데이트 실패",
        });
    }
});

//*Delete: 고양이 ID로 데이터베이스에서 삭제
catRouter.delete("/cats/:id", (req, res) => {
    //* params에서 id 추출
    const catId = req.params.id;

    try {
        const catData = [...CatInfos];
        const deletedCatData = catData.filter((data) => data.id !== catId);

        res.status(200).send({
            success: true,
            data: {
                updatedCat: deletedCatData,
            },
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            message: "고양이 데이터 삭제 실패",
        });
    }
});

export default catRouter;
