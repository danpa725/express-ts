import * as express from "express";
import catRouter from "./cats/cat.router";

//*싱글턴 패턴 적용
class Server {
    public app: express.Application;
    private PORT = 8000;

    constructor() {
        const app: express.Application = express();
        this.app = app;
    }

    //* access-logging
    private setLoggingRoute() {
        this.app.use((req, res, next) => {
            // 로깅 미들웨어
            console.log(req.rawHeaders[0]);
            next();
        });
    }

    //* json, cors ...
    private setSystemRoutes() {
        this.app.use(express.json());
    }

    //* Middlewares 분리
    private setMiddleRoutes() {
        this.app.use(catRouter);
    }

    //* error handling
    private setErrHandlingRoute() {
        this.app.use((req, res, next) => {
            res.send({
                error: 404,
            });
        });
    }

    //* init all routes
    private initRoutes() {
        this.setLoggingRoute();
        this.setSystemRoutes();

        this.setMiddleRoutes();

        this.setErrHandlingRoute();
    }

    //* init server
    public init() {
        this.initRoutes();

        //* boot message
        this.app.listen(this.PORT, () => {
            console.log(`port : ${this.PORT}\n Server open!🎇`);
        });
    }
}

function serverInit() {
    const server = new Server();
    server.init();
}

serverInit();
