import * as express from "express";
import catRouter from "./cats/router/cat.router";

//*싱글턴 패턴 적용
class Server {
    public app: express.Application;
    private PORT = 8000;

    constructor() {
        const app: express.Application = express();
        this.app = app;
    }

    private setRoutes() {
        //* catRouter 분리
        this.app.use(catRouter);
    }

    private setMiddlewares() {
        //* logging
        this.app.use((req, res, next) => {
            // 로깅 미들웨어
            console.log(req.rawHeaders[0]);
            next();
        });

        //* json
        this.app.use(express.json());

        //* catRoute
        this.setRoutes();

        //* error handling
        this.app.use((req, res, next) => {
            res.send({
                error: 404,
            });
        });
    }

    public listen() {
        this.setMiddlewares();

        this.app.listen(this.PORT, () => {
            console.log(`port : ${this.PORT}에서 서버가 열림`);
        });
    }
}

function serverInit() {
    const server = new Server();
    server.listen();
}

serverInit();
