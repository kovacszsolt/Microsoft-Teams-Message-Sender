const axios = require("axios");
exports.sendMessage = function (url, color, title, subTitle) {
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
