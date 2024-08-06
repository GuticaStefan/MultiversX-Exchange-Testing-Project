import { Injectable } from '@nestjs/common';
import { db } from '../database/init-db';

@Injectable()
export class MarketplaceService {
    async getAuctions(): Promise<any> {
        return db.auctions;
    }

    async getAuctionsCount(): Promise<number> {
        return db.auctions.length;
    }
  
    async getAuctionDetails(id: string): Promise<any> {}
  
    async getAccountAuctionStats(address: string): Promise<any> {}
  
    async getAccountAuctions(address: string): Promise<any> {}
  
    //async getAddressAuctionsCount(address: string): Promise<number> {}
  
    async getCollectionAuctionStats(collection: string): Promise<any> {}
  
    async getCollectionAuctions(collection: string): Promise<any> {}
  
    //async getCollectionAuctionsCount(collection: string): Promise<number> {}
}
