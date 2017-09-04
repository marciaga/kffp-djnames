const fs = require('fs');

const readCsv = () => {
    fs.readFile('names.csv', (err, data) => {
        if (err) {
            return console.log(err);
        }

        const bufferStr = data.toString().split('\n')
        .map(d => d.replace(/dj/i, ''));


        //Convert and store csv information into a buffer.
        fs.writeFileSync('./src/list.js', 'export const djNames = ' + JSON.stringify(bufferStr));
    });
};

readCsv()
