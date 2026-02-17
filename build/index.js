import fs from 'node:fs';
const listMatches = fs.readFileSync('football.csv', { encoding: 'utf-8' }).split('\n').map((row) => {
    return row.split(',');
});
console.log(listMatches);
//# sourceMappingURL=index.js.map