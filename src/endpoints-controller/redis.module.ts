import { Module, Global } from '@nestjs/common';
import { createClient } from 'redis';

@Global()
@Module({
  providers: [
    {
      provide: 'REDIS_CLIENT',
      useFactory: () => {
        const client = createClient({
          url: process.env.REDIS_URL
        });
        client.on('error', (err) => console.error('Redis Client Error', err));
        client.connect().catch(console.error);
        return client;
      },
    },
  ],
  exports: ['REDIS_CLIENT'],
})
export class RedisModule {}
