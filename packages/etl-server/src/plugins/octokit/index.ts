import fp from "fastify-plugin";
import {Octokit} from "@octokit/rest";

declare module 'fastify' {
    interface FastifyInstance {
        octokit: Octokit
    }
}

export default fp(async (app) => {
    // Init octokit.
    const octokit = new Octokit({
        auth: app.config.GITHUB_ACCESS_TOKENS[0],
    });

    app.decorate('octokit', octokit);
}, {
    name: 'octokit',
    dependencies: [
        '@fastify/env'
    ],
});