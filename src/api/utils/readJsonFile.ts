import * as fs from 'fs';

// Definim tipul pentru obiectul JSON
interface ObiectJson {
    [key: string]: any;
}

// Funcție pentru crearea obiectului JSON din fișier
export function createJsonObject(filePath: string): ObiectJson | null {
    try {
    
        const fileData: string = fs.readFileSync(filePath, 'utf8');
    
        const jsonObject: ObiectJson = JSON.parse(fileData);
    
        return jsonObject;
    } catch (err) {
        console.error('Eroare la citirea sau parsarea fișierului JSON:', err);
        return null;
    }
}