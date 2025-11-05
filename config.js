const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~UNwHlALK#49zkdF1_2h7TV42-a8iHvZlDD8m5nU7YqA6JYuMKrRY'
};
