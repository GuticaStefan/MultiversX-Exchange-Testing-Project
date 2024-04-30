export class Stats {
    shards: number;
    blocks: number;
    accounts: number;
    transactions: number;
    scResults: number; // doesn't exist in the actual model(dto), but it is contained in swagger response
    refreshRate: number;
    epoch: number;
    roundsPassed: number;
    roundsPerEpoch: number;

    constructor(init?: Partial<Stats>) {
        Object.assign(this, init);
    }
}