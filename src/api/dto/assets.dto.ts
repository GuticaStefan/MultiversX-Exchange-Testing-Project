import { SocialModel } from "./social.dto";

export class AssetsModel {
    website?: string;
    description?: string;
    status?: string;
    pngUrl?: string;
    svgUrl?: string;
    lockedAccounts?: {[address: string]: string};
    extraTokens?: string[];
    ledgerSignature?: string;
    social?: SocialModel;
    constructor(init?: Partial<AssetsModel>) {
        Object.assign(this, init);
    }
}
