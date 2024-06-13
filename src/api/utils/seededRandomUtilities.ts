export class RandomGenerator {
    private seed: number;

    constructor(seed: string) {
        // Convertește seed-ul într-un număr întreg
        this.seed = this.stringToInt(seed);
    }

    // Converteste un șir de caractere într-un număr întreg
    private stringToInt(str: string): number {
        let hash = 0;
        if (str.length === 0) return hash;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash |= 0; // Converteste la un int de 32 de biti
        }
        return hash;
    }

    // Generează un număr întreg aleatoriu între 0 și maxValue
    public generateRandomInt(maxValue: number): number {
        // LCG parameters
        const a = 1664525;
        const c = 1013904223;
        const m = Math.pow(2, 32);

        // Generează următorul număr aleatoriu
        this.seed = Math.abs((a * this.seed + c) % m);
        // Normalizează valoarea între 1 și maxValue
        const randomInt = this.seed % maxValue + 1;
        return randomInt;
    }

    public generateRandomBool(): boolean {
        return this.generateRandomInt(3) > 1 ? true : false;
    }

    // Generează un șir de caractere aleatorii de o anumită lungime
    public generateRandomString(length: number): string {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = this.generateRandomInt(characters.length);
            result += characters.charAt(randomIndex);
        }
        return result;
    }

    // Generează un șir de bytes aleatoare de o anumită lungime
    public generateRandomBytes(length: number): String {
        const bytes = new Uint8Array(length);
        for (let i = 0; i < length; i++) {
            bytes[i] = this.generateRandomInt(256); // Generează un număr întreg între 0 și 255 pentru bytes
        }
        const base64String = btoa(String.fromCharCode.apply(null, bytes));
        return base64String;
    }
}