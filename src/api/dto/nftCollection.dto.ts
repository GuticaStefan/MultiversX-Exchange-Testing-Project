// import { ObjectType } from '@nestjs/graphql';
import { AssetsModel } from './assets.dto';
// import { INFTCollection } from './nft.interface';
import { RolesModel } from './roles.dto';

// @ObjectType({
//     implements: () => [INFTCollection],
// })
export class NftCollection { // implements INFTCollection {
    collection: string;
    type: string;
    name: string;
    ticker: string;
    owner: string;
    decimals: number;
    issuer: string;
    timestamp: number;
    canUpgrade: boolean;
    canMint: boolean;
    canBurn: boolean;
    canChangeOwner: boolean;
    canPause: boolean;
    canFreeze: boolean;
    canWipe: boolean;
    canAddSpecialRoles: boolean;
    canTransferNftCreateRole: boolean;
    NFTCreateStopped: boolean;
    assets?: AssetsModel;
    roles?: RolesModel[];
    traits: string;
    canTransfer: boolean;
    constructor(init?: Partial<NftCollection>) {
        Object.assign(this, init);
    }
}