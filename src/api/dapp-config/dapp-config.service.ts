import { Injectable } from '@nestjs/common';
import { db } from '../database/init-db';
@Injectable()
export class DappConfigService {
 async getDappConfig(): Promise<any> {
    return db.dapp_config;
 }
}
