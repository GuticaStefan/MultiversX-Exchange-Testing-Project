import { Injectable } from '@nestjs/common';
import { db } from '../database/init-db';

@Injectable()
export class DelegationService {
    async getDelegationStatistics(): Promise<any> {
        return undefined;
    }

    async getLegacyDelegationStatistics(): Promise<any> {
        return undefined;
    }
}
