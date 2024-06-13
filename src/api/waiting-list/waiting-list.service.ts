import { Injectable } from '@nestjs/common';
import { db } from '../database/init-db';

@Injectable()
export class WaitingListService {
    async getWaitingList(): Promise<any> {
        return db.waiting_list;
    }

    async getWaitingListCount(): Promise<number> {
        return db.waiting_list.length;
    }
}
