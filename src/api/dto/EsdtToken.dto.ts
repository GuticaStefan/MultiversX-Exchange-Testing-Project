import { AssetsModel } from './assets.dto';
import { RolesModel } from './roles.dto';

export enum EsdtTokenType {
    FungibleToken = 'FungibleESDT',
    FungibleLpToken = 'FungibleESDT-LP',
}

export class EsdtToken {
    identifier: string;
    name: string;
    ticker: string;
    owner: string;
    minted?: string;
    burnt?: string;
    initialMinted?: string;
    decimals: number;
    derivedEGLD: string;
    price?: number;
    supply?: string;
    circulatingSupply?: string;
    assets?: AssetsModel;
    transactions: number;
    transfersCount: number;
    accounts: number;
    isPaused: boolean;
    canUpgrade: boolean;
    canMint: boolean;
    canBurn: boolean;
    canChangeOwner: boolean;
    canPause: boolean;
    canFreeze: boolean;
    canWipe: boolean;
    roles?: RolesModel[];
    type?: string;
    balance?: string;
    canAddSpecialRoles?: boolean;
    marketCap?: number;
    mexPairType?: string;
    totalLiquidity?: number;
    totalVolume24h?: number;

    constructor(init?: Partial<EsdtToken>) {
        Object.assign(this, init);
        this.assets = new AssetsModel(init.assets);
        if (init?.roles) {
            this.roles = init.roles.map(role => new RolesModel(role));
        } else {
            this.roles = [];
        }
    }
}