import AutoLoad, { AutoloadPluginOptions } from '@fastify/autoload';
import { FastifyPluginAsync, RawServerDefault } from 'fastify';

import { APIServerEnvSchema } from './env';
import { JsonSchemaToTsProvider } from '@fastify/type-provider-json-schema-to-ts';
import fastifyEnv from '@fastify/env';
import {join} from "path";

export type AppOptions = {
  // Place your custom options for app below here.
} & Partial<AutoloadPluginOptions>;

// Pass --options via CLI arguments in command to enable these options.
const options: AppOptions = {
}

declare module 'fastify' {
  interface FastifyInstance {
    config: {
      CONFIGS_PATH: string;
      DATABASE_URL: string,
      API_BASE_URL: string,
      QUEUE_LIMIT: number,
      CONNECTION_LIMIT: number,
      ENABLE_CACHE: boolean,
      GITHUB_ACCESS_TOKENS: string[],
      PULSAR_SERVICE_ENDPOINT: string,
      PULSAR_ACCESS_TOKEN: string,
    };
  }
}

const app: FastifyPluginAsync<AppOptions, RawServerDefault, JsonSchemaToTsProvider> = async (
    fastify,
    opts
): Promise<void> => {

  // Load config.
  await fastify.register(fastifyEnv, {
    confKey: 'config',      // You can access environment variables via `fastify.config`.
    dotenv: true,
    schema: APIServerEnvSchema
  });

  // This loads all plugins defined in plugins.
  void fastify.register(AutoLoad, {
    dir: join(__dirname, 'plugins'),
    options: opts
  });

  // This loads all jobs defined in jobs.
  void fastify.register(AutoLoad, {
    dir: join(__dirname, 'jobs'),
    options: opts
  });
};

export default app;
export { app, options };

