import { Injectable } from '@nestjs/common';
import { db } from '../database/init-db';

@Injectable()
export class ShardsService {
    async getShards(): Promise<any> {
        return db.shards;
    }
}
