import { Injectable } from '@nestjs/common';
import { db } from '../database/init-db';

@Injectable()
export class ResultsService {
    async getSmartContractResults(): Promise<any> {
        return db.results;
    }

    async getSmartContractsCount(): Promise<number> {
        return db.results.length;
    }
  
    async getSmartContractResultsDetail(scHash: string): Promise<any> {}
}
