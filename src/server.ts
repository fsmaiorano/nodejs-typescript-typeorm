import express from 'express';
import * as bodyParser from 'body-parser';
import cors from './config/cors';
import UserRoutes from './app/routes/userRoutes';

class Server {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(cors);
    }

    routes(): void {
        this.express.use('/api/users', new UserRoutes().router);
    }
}

export default new Server().express;
