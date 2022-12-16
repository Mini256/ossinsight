import { FastifyPluginAsync } from 'fastify';

export const schema = {
  body: {
    type: 'object',
    required: ['sql'],
    properties: {
      sql: {
        type: 'string',
      },
      cancelPrevious: {
        type: 'boolean',
        default: true
      }
    }
  }
};

export interface IBody {
  sql: string;
  cancelPrevious: boolean;
}

// @Deprecated
const root: FastifyPluginAsync = async (app) => {
  app.post<{
    Body: IBody
  }>('/', {
    schema,
    preHandler: [app.authenticateAllowAnonymous]
  },async (req, reply) => {
    const { sql, cancelPrevious } = req.body;
    let userId = req.user?.id;
    let ip = req.ip;
    const res = await app.playgroundService.executeSQL(sql, cancelPrevious, userId, ip);
    reply.status(200).send({
      data: res.data,
      fields: res.fields,
      sql: res.sql,
      spent: res?.stats?.spent,
      requestedAt: res?.stats?.requestedAt,
      finishedAt: res?.stats?.finishedAt,
    });
  });
};

export default root;
