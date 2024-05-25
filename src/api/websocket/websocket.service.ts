import { Injectable } from '@nestjs/common';
import { db } from '../database/init-db';

@Injectable()
export class WebsocketService {
    async getWebSocketConfig(): Promise<any> {
        return db.websocket_config;
    }
}
