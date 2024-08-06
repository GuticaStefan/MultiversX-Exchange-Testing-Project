import { Module } from '@nestjs/common';
import { ShardsService } from './shards.service';
import { ShardsController } from './shards.controller';

@Module({
  controllers: [ShardsController],
  providers: [ShardsService],
})
export class ShardsModule {}
