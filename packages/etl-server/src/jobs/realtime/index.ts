import fp from "fastify-plugin";
import {MySQLPromisePool} from "@fastify/mysql";

export default fp(async (app) => {
    setInterval(async (octokit, db: MySQLPromisePool) => {
        try {
            const res = await octokit.rest.activity.listPublicEvents({
                per_page: 100,
            });
            const events = res.data;

            const records = events.map((event) => {
                return [event.id];
            });
            await db.query(`
                INSERT INTO github_events(
                    id, type, action, org_id, org_login, repo_id, repo_name, actor_id, actor_login, number, state, created_at, closed_at,
                    creator_user_id, creator_user_login, pr_or_issue_id, pr_or_issue_created_at, pr_changed_files, pr_review_comments, pr_merged, pr_merged_at, 
                    language, additions, deletions, comments, push_size, push_distinct_size, commit_id, comment_id, event_day, event_month, event_year
                )
            `, [records]);

            app.log.info(`Sent ${events.length} events to Pulsar.`);
        } catch (err) {
            app.log.error(err, 'Failed to pull events from GitHub');
        }
    }, 700, app.octokit, app.mysql);
}, {
    name: 'pull-github-events',
    dependencies: [
        '@fastify/env',
        'db',
        'octokit'
    ],
});