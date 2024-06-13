import { Injectable } from '@nestjs/common';
import { db } from '../database/init-db';

@Injectable()
export class ProvidersService {
    async getProviders(): Promise<any> {
        return db.providers;
    }

    async getProviderAccounts(address: string): Promise<any> {}

    //async getProviderAccountsCount(address: string): Promise<number> {}

    async getProvider(address: string): Promise<any> {}

    async getProviderAvatar(address: string): Promise<any> {}
}
