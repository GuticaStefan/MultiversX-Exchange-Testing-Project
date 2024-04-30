export class AssetsModel {
    website?: string;
    description?: string;
    status?: string;
    pngUrl?: string;
    svgUrl?: string;
    lockedAccounts?: string[];
    extraTokens?: string[];
    ledgerSignature?: string;
    constructor(init?: Partial<AssetsModel>) {
        Object.assign(this, init);
    }
}
