import fp from "fastify-plugin";
import Pulsar, {AuthenticationToken} from "pulsar-client";

declare module 'fastify' {
    interface FastifyInstance {
        pulsar: Pulsar.Client;
        githubEventsProducer: Pulsar.Producer;
    }
}

export default fp(async (app) => {
    const pulsarClient = new Pulsar.Client({
        serviceUrl: String(app.config.PULSAR_SERVICE_ENDPOINT),
        authentication: new AuthenticationToken({
            token: app.config.PULSAR_ACCESS_TOKEN,
        }),
    });
    const producer = await pulsarClient.createProducer({
        topic: 'github-events'
    });
    if (producer.isConnected()) {
        app.log.info('Connected to Pulsar.');
    }

    app.decorate('pulsar', pulsarClient);
    app.decorate('githubEventsProducer', producer);
}, {
    name: 'pulsar',
    dependencies: [
        '@fastify/env'
    ],
});