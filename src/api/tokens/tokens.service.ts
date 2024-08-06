import { Injectable } from '@nestjs/common';
import { db } from '../database/init-db';

@Injectable()
export class TokensService {
    async getTokens(): Promise<any> {
        return db.tokens;
    }

    async getTokensCount(): Promise<number> {
        return db.tokens.length;
    }
  
    async getToken(identifier: string): Promise<any> {}
  
    async getTokenSupply(identifier: string): Promise<any> {}
  
    async getTokenAccounts(identifier: string): Promise<any> {}
  
    //async getTokenAccountsCount(identifier: string): Promise<number> {}
  
    async getTokenTransactions(identifier: string): Promise<any> {}
  
    //async getTokenTransactionsCount(identifier: string): Promise<number> {}
  
    async getTokenRoles(identifier: string): Promise<any> {}
  
    async getTokenAddressRoles(identifier: string, address: string): Promise<any> {}
  
    async getTokenValueTransfers(identifier: string): Promise<any> {}
  
    //async getTokenTransferCount(identifier: string): Promise<number> {}
  
    async getTokenLogoPNG(identifier: string): Promise<any> {}
  
    async getTokenLogoSVG(identifier: string): Promise<any> {}
}
