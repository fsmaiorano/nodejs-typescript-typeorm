import 'reflect-metadata';
import * as http from 'http';
import server from './server';
import databaseConnection from './database/db';

databaseConnection
    .then(async connection => {
        console.log(connection);
        const port = process.env.port || 4000;
        const _server = http.createServer(server);

        _server.listen(port, () => console.log(`Server [ONLINE] at port ${port}`));
    })
    .catch(error => console.log('TypeORM connection error: ', error));
