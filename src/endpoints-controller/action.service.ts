import { Injectable, Inject } from '@nestjs/common';
import { RedisClientType } from 'redis';

interface EndpointAction {
  type: 'delay' | 'crash' | 'error';
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

@Injectable()
export class ActionService {
  constructor(
    @Inject('REDIS_CLIENT') private readonly redisClient: RedisClientType
  ) {}

  async setAction(endpoint: string, action: DelayAction | CrashAction | ErrorAction): Promise<void> {
    await this.redisClient.set(endpoint, JSON.stringify(action));
    await this.redisClient.expire(endpoint, 60);
  }

  async getAction(endpoint: string): Promise<DelayAction | CrashAction | ErrorAction | null> {;
    const action = await this.redisClient.get(endpoint);
    return action ? JSON.parse(action) : null;
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
