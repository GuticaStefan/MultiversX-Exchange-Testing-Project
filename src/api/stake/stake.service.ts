import { Injectable } from '@nestjs/common';
import { db } from '../database/init-db';

@Injectable()
export class StakeService {
    async getStake(): Promise<any> {
        return db.stake;
    }
}
