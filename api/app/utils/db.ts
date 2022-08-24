import { PoolOptions } from "mysql2/typings/mysql";
import consola from "consola";
import { Connection, createConnection } from "mysql2";

const DEFAULT_TIDB_SERVER_PORT = '4000';

export function getConnectionOptions(options?: PoolOptions) {
    if (process.env.DATABASE_URL === undefined || process.env.DATABASE_URL.length === 0) {
        consola.error('Must provide DATABASE_URL in the env variable.');
        process.exit();
    }

    const url = new URL(process.env.DATABASE_URL);
    const dbHost = url.hostname;
    const dbName = url.pathname.replaceAll('/', '');
    const dbPort = parseInt(url.port || DEFAULT_TIDB_SERVER_PORT);
    const dbUser = url.username;
    const dbPass = url.password;
    const defaultOptions = {
        host: dbHost,
        port: dbPort,
        database: dbName,
        user: dbUser,
        password: dbPass,
        decimalNumbers: true,
        timezone: 'Z'
    };    
    return Object.assign(defaultOptions, options);
}

export function handleDisconnect(client: Connection) {
    client.on('error', function (err: any) {
      if (!err.fatal) return;
      if (err.code !== 'PROTOCOL_CONNECTION_LOST') throw err;
  
      console.error('> Re-connecting lost MySQL connection: ' + err.stack);
  
      const mysqlClient = createConnection(client.config);
      handleDisconnect(mysqlClient);
      mysqlClient.connect();
    });
};
