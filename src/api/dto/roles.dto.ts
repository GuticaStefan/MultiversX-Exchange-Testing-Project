export class RolesModel {
    address?: string;
    canLocalMint?: boolean;
    canLocalBurn?: boolean;
    roles?: string[];
 
    constructor(init?: Partial<RolesModel>) {
        Object.assign(this, init);
    }
}
