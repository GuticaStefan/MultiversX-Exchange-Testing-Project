import * as fs from 'fs';

interface jsonObject {
    [key: string]: any;
}

export function createJsonObject(filePath: string): jsonObject | null {
    try {
    
        const fileData: string = fs.readFileSync(filePath, 'utf8');

        const jsonObject: jsonObject = JSON.parse(fileData);
    
        return jsonObject;
    } catch (err) {
        console.error('Eroare la citirea sau parsarea fișierului JSON:', err);
        return null;
    }
}