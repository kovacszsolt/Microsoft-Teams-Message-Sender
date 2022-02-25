const yargs = require('yargs');
const axios = require("axios");

const sendMessage = (url, color, title, subTitle) => {
    const data = {
        "@type": "MessageCard",
        "@context": "http://schema.org/extensions",
        "themeColor": color,
        "summary": title,
        "sections": [{
            "activityTitle": title,
            "activitySubtitle": subTitle,
            "facts": [],
            "markdown": true
        }]
    };
    return axios.post(url, JSON.stringify(data), {
        headers: {'Content-Type': 'application/json'}
    });
}

module.exports = function sendMessage(url, color, title, subTitle) {
    return sendMessage(url, color, title, subTitle);
};


const argv = yargs
    .usage('Usage: $0')
    .alias('t', 'title')
    .describe('title', 'Message Title')

    .alias('s', 'subtitle')
    .describe('subtitle', 'Message Subtitle')

    .alias('c', 'color')
    .describe('color', 'Message Theme Color')

    .describe('url', 'Microsoft Teams Webhook URL')

    .demandOption(['t', 'url', 's'])
    .help('h')
    .argv;
const title = argv['t'];
const subTitle = argv['s'];
const url = argv['url'];
const color = argv['c'] ? argv['c'] : '#0076D7';
sendMessage(url, color, title, subTitle).then(() => {
    console.log('Message sent');
}).catch((err) => {
    console.log(err);
});
