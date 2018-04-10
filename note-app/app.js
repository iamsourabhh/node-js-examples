console.log('Starting App');

const fs = require('fs');
const os = require('os');

const user = os.userInfo();

fs.appendFileSync('greetings.txt', 'Hello ' + user.username + '!', function (error) {
    console.error('Unable to write to the file due to ', error);
});
// fs.appendFile throws an error and I consoled it, the value was null
// dekhna pdega kya chutiyapa h
// fs.appendFile('greetings.txt', 'Gand mara le madrchod', function (error) {
//     console.error('Unable to write to the file due to ', error);
// });