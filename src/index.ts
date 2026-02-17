import fs from 'node:fs';
import { CsvFileReader } from './CsvFileReader.js';
import { MatchResult } from './MatchResult.js';

const listMatches = new CsvFileReader('football.csv')
listMatches.read()

let LiverpoolWins = 0;

for (const match of listMatches.data) {
    if (match[1] === "Liverpool" && match[5] === MatchResult.HomeWin) {
        LiverpoolWins++
    } else if (match[2] === "Liverpool" && match[5] === MatchResult.AwayWin) {
        LiverpoolWins++
    }
}
console.log(`Liverpool records ${LiverpoolWins} wins this 2018 - 2019 season`);
