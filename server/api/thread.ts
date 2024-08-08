import { client, assistant } from "../utils/openai";

export default defineEventHandler(async () => {
    const thread = await client.beta.threads.create();

    const run = await client.beta.threads.runs.create(thread.is, {
        assistant_id: assistant
    });

    return {
        thread: thread.id,
        run: run.id
    };
});