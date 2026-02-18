import { MatchResult } from './MatchResult.js';
import { MatchReader } from './MatchReader.js';
const listMatches = new MatchReader('football.csv');
listMatches.read();
listMatches.readData();
let LiverpoolWins = 0;
console.log("listMatches data 0", listMatches?.data?.[0]);
console.log("listMatches listdata 0", listMatches?.listdata?.[0]);
for (const match of listMatches.data) {
    if (match[1] === "Liverpool" && match[5] === MatchResult.HomeWin) {
        LiverpoolWins++;
    }
    else if (match[2] === "Liverpool" && match[5] === MatchResult.AwayWin) {
        LiverpoolWins++;
    }
}
console.log(`Liverpool records ${LiverpoolWins} wins this 2018 - 2019 season`);
//# sourceMappingURL=index.js.map