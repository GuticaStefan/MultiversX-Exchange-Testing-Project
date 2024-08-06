import { Injectable, Inject } from '@nestjs/common';
import { response } from 'express';
import { RedisClientType } from 'redis';
import { json } from 'stream/consumers';

interface EndpointAction {
  type: 'delay' | 'crash' | 'data' | 'error';
}


class DelayAction implements EndpointAction {
  type: 'delay';
  value?: number = 0;
}

class CrashAction implements EndpointAction {
  type: 'crash';
}

class ErrorAction implements EndpointAction {
  type: 'error';
  error?: {
    message: string,
    error?: string,
    statusCode: number,
  } = undefined;
}

class CustomData implements EndpointAction {
  type: 'data';
  data: any;
}

@Injectable()
export class ActionService {
  constructor(
    @Inject('REDIS_CLIENT') private readonly redisClient: RedisClientType
  ) {}

  async setAction(endpoint: string, action: CrashAction | ErrorAction | CustomData): Promise<void> {
    await this.redisClient.hSet(endpoint, 'action', JSON.stringify(action));
    await this.redisClient.expire(endpoint, 60);
  }


  async setDelay(endpoint: string, delay: DelayAction): Promise<void> {
    await this.redisClient.hSet(endpoint, 'delay', JSON.stringify(delay));
    await this.redisClient.expire(endpoint, 60);
  }

  async getAction(endpoint: string): Promise<CrashAction | ErrorAction | CustomData | null> {;
    const action = await this.redisClient.hGet(endpoint, 'action');
    return action ? JSON.parse(action) : null;
  }

  async getDelay(endpoint: string): Promise<DelayAction> {;
    const deelay = await this.redisClient.hGet(endpoint, 'delay');
    return deelay ? JSON.parse(deelay) : null;
  }

  async clearActions() {
    try {
      await this.redisClient.flushAll();
    } catch (error){
      return error;
    }
    return { message: "Actions cleared succesfully !"}
  }
}
