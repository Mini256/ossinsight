import { resolve } from "path";

export const APIServerEnvSchema = {
  type: 'object',
  required: [ 'DATABASE_URL', 'GITHUB_ACCESS_TOKENS' ],
  properties: {
    CONFIGS_PATH: {
      type: 'string',
      default: resolve(__dirname, '..', '..', '..', 'configs')
    },
    DATABASE_URL: {
      type: 'string'
    },
    API_BASE_URL: {
      type: 'string'
    },
    QUEUE_LIMIT: {
      type: 'number',
      default: 10000
    },
    CONNECTION_LIMIT: {
      type: 'number',
      default: 100
    },
    ENABLE_CACHE: {
      type: 'boolean',
      default: false
    },
    GITHUB_ACCESS_TOKENS: {
      type: 'string',
      separator: ','
    },
    PULSAR_SERVICE_ENDPOINT: {
      type: 'string'
    },
    PULSAR_ACCESS_TOKEN: {
      type: 'string'
    },
  },
};