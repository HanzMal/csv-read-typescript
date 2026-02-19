import fs from 'node:fs';

export class CsvFileReader{
    data: string[][] = []

    constructor (public filename: string) {}

    // abstract mapRow(row: string[]): TypeOfData

    // readData():void {
    //     this.listdata = fs.readFileSync(this.filename, { encoding: 'utf-8' }).split('\n').map((row: string): string[] => {
    //         return row.split(',')
    //     })
    // }

    read():void {
        this.data = fs.readFileSync(this.filename, { encoding: 'utf-8' }).split('\n').map((row: string): string[] => {
            return row.split(',')
        }) 
    }
}