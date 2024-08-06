import { Injectable } from '@nestjs/common';
import { db } from '../database/init-db';
@Injectable()
export class CollectionsService {
    async getCollections(): Promise<any> {
        return db.collections;
    }

    async getCollectionCount(): Promise<number> {
        return db.collections.length;
    }
  
    // async getCollectionDetails(collection: string): Promise<any> {}
  
    // async getCollectionRanks(collection: string): Promise<any> {}
  
    // async getCollectionNFTs(collection: string): Promise<any> {}
  
    // async getCollectionNFTCount(collection: string): Promise<number> {}
  
    // async getCollectionAccounts(identifier: string): Promise<any> {}
  
    // async getCollectionTransactions(collection: string): Promise<any> {}
  
    // async getNFTTransactionCount(collection: string): Promise<number> {}
  
    // async getCollectionTransfers(collection: string): Promise<any> {}
  
    // async getNFTTransferCount(collection: string): Promise<number> {}
}
