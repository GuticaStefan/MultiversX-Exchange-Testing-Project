import { Injectable } from '@nestjs/common';
import { db } from '../database/init-db';

@Injectable()
export class NftsService {
    async getNfts(): Promise<any> {
        return db.nfts;
    }

    async getNftsCount(): Promise<number> {
        return db.nfts.length;
    }
  
    async getNFTDetails(identifier: string): Promise<any> {}
  
    async getNFTThumbnail(identifier: string): Promise<any> {}
  
    async getNFTSupply(identifier: string): Promise<any> {}
  
    async getNFTAccounts(identifier: string): Promise<any> {}
  
   //async getNFTAccountsCount(identifier: string): Promise<number> {}
  
    async getNFTTransactions(identifier: string): Promise<any> {}
  
    //async getNFTTransactionsCount(identifier: string): Promise<number> {}
  
    async getNFTTransfers(identifier: string): Promise<any> {}
  
   // async getNFTTransfersCount(identifier: string): Promise<number> {}
}
