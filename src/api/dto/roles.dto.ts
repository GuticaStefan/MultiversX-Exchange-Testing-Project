export class RolesModel {
    address?: string;
    canLocalMint?: boolean;
    canLocalBurn?: boolean;
    roles?: string[];
    canCreate?: boolean;
    canBurn?: boolean;
    canAddQuantity?: boolean;
    canUpdateAttributes?: boolean;
    canAddUri?: boolean;
    constructor(init?: Partial<RolesModel>) {
        Object.assign(this, init);
    }
}
