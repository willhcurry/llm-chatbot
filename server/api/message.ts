import { getLatestMessages } from "../utils/get-message";

export default defineEventHandler(async (event) => {
    const threadID = getCookie(event, "thread-id");
    const runID = getCookie(event, "run-id");

    if (!threadID || !runID) {
        return;
    }

    return getLatestMessages(threadID, runID);
});