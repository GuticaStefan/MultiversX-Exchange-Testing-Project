import { Injectable } from '@nestjs/common';
import { db } from '../database/init-db';

@Injectable()
export class TransactionsService {
    async getTransactionList(): Promise<any> {
        return db.transactions;
    }

    async sendTransaction(): Promise<any> {}
  
    async getTransactionsCount(): Promise<number> {
        return db.transactions.length;
    }
  
    async getTransactionDetails(txHash: string): Promise<any> {}
  
    async decodeTransaction(): Promise<any> {}
}
