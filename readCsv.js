const fs = require('fs');

const readCsv = () => {
    fs.readFile('names.csv', (err, data) => {
        if (err) {
            return console.log(err);
        }

        const bufferStr = data.toString().split(' ')
        .map(d => d.replace(/dj/i, '').trim())
        .map(f => f.replace(/\r?\n|\r/g, ''))
        .filter(n => n !== '&')
        .filter(m => m);

        // Convert and store csv information into a buffer.
        fs.writeFileSync('./src/list.js', 'export const djNames = ' + JSON.stringify(bufferStr));
    });
};

readCsv()
