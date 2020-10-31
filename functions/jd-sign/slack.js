const request = require("request");

const isSlackActive = !!process.env.SLACK_WEBHOOK_URL;

const slackNotify = async (msg) => {
    if (!isSlackActive) return;

    return new Promise((resolve, reject) => {
        request(
            {
                method: "POST",
                url: process.env.SLACK_WEBHOOK_URL,
                body: JSON.stringify({ text: msg }),
            },
            (err) => {
                if (err) {
                    console.error(err);
                    reject(err);
                    return;
                }
                resolve();
            }
        );
    });
};

module.exports = slackNotify;
