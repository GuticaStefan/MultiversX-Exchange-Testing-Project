import { Injectable } from '@nestjs/common';
import { db } from '../database/init-db';

@Injectable()
export class RoundsService {
    async getRounds(): Promise<any> {
        return db.rounds;
    }

    async getRoundsCount(): Promise<number> {
        return db.rounds.length;
    }
  
    async getRoundDetails(shard: string, round: string): Promise<any> {}
}
