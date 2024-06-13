import * as fs from 'fs';

export function createJsonObject(filePath: string): any {
    try {
    
        const fileData: string = fs.readFileSync("./src/api/database/" + filePath, 'utf8');

        const jsonObject = JSON.parse(fileData);
    
        return jsonObject;
    } catch (err) {
        console.error('Eroare la citirea sau parsarea fișierului JSON:', err);
        return null;
    }
}