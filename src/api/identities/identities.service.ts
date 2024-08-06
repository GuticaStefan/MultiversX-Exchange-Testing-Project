import { Injectable } from '@nestjs/common';
import { db } from '../database/init-db';

@Injectable()
export class IdentitiesService {
    async getIdentities(): Promise<any> {
        return db.identities;
    }

    async getIdentityDetails(identifier: string): Promise<any> {}

    async getIdentityAvatar(identifier: string): Promise<any> {}
}
