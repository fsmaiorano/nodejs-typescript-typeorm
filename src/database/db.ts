import 'reflect-metadata';
import { createConnection, Connection, ConnectionOptions } from 'typeorm';
import { join } from 'path';
const parentDir = join(__dirname, '..');

const connectionOpts: ConnectionOptions = {
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || '123456',
    database: process.env.DB_NAME || 'test',
    entities: [`${parentDir}/**/*.entity.ts`],
    synchronize: true
};

const connection: Promise<Connection> = createConnection(connectionOpts);

export default connection;

// {
//     "type": "postgres",
//     "host": "localhost",
//     "port": 5432,
//     "username": "postgres",
//     "password": "123456",
//     "database": "test",
//     "synchronize": true,
//     "logging": false,
//     "entities": ["src/database/entity/**/*.js"],
//     "migrations": ["src/database/migration/**/*.js"],
//     "subscribers": ["src/database/subscriber/**/*.js"],
//     "cli": {
//         "entitiesDir": "src/database/entity",
//         "migrationsDir": "src/database/migration",
//         "subscribersDir": "src/database/subscriber"
//     }
// }
