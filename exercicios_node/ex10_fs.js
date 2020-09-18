const fs = require('fs');

const file = fs.readdirSync(__dirname);

file.forEach(f => {
    console.log(f);
});