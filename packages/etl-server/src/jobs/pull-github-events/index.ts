import fp from "fastify-plugin";
import pulsar from "pulsar-client";

export default fp(async (app) => {
    setInterval(async (octokit, producer: pulsar.Producer) => {
        try {
            const res = await octokit.rest.activity.listPublicEvents({
                per_page: 100,
            });
            const events = res.data;

            for (const event of events) {
                const message = JSON.stringify(event);
                producer.send({
                    sequenceId: Number(event.id),
                    data: Buffer.from(message),
                }).then(null);
            }

            app.log.info(`Sent ${events.length} events to Pulsar.`);
        } catch (err) {
            app.log.error(err, 'Failed to pull events from GitHub');
        }
    }, 700, app.octokit, app.githubEventsProducer);
}, {
    name: 'pull-github-events',
    dependencies: [
        '@fastify/env',
        'db',
        'octokit',
        'pulsar',
    ],
});