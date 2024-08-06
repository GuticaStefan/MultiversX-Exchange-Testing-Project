import { Module } from '@nestjs/common';
import { MiniblocksService } from './miniblocks.service';
import { MiniblocksController } from './miniblocks.controller';

@Module({
  controllers: [MiniblocksController],
  providers: [MiniblocksService],
})
export class MiniblocksModule {}
