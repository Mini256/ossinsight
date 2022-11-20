
import fp from "fastify-plugin";
import {getConnectionOptions} from "../../utils/db";
import fastifyMySQL from "@fastify/mysql";

export default fp(async (app) => {
    // Init MySQL Client.
    if (process.env.NODE_ENV === 'test' && (/tidb-cloud|gharchive_dev|github_events_api/.test(app.config.DATABASE_URL))) {
        throw new Error('Do not use online database in test env.');
    }

    // Register MySQL plugin.
    await app.register(fastifyMySQL, {
        type: 'pool',
        promise: true,
        ...getConnectionOptions(),
        ssl: {
            rejectUnauthorized: true
        }
    });
}, {
    name: 'db',
    dependencies: [
        '@fastify/env'
    ],
});