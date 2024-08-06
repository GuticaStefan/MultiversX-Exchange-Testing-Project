import { Injectable } from '@nestjs/common';
import { db } from '../database/init-db';

@Injectable()
export class MiniblocksService {
    async getMiniblocks(): Promise<any> {
        return db.miniblocks;
    }

    async getMiniblockDetails(miniBlockHash: string): Promise<any> {}
}
