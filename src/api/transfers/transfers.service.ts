import { Injectable } from '@nestjs/common';
import { db } from '../database/init-db';

@Injectable()
export class TransfersService {
    async getTransfers(): Promise<any> {
        return db.transfers;
    }

    async getTransfersCount(): Promise<number> {
        return db.transfers.length;
    }
}
