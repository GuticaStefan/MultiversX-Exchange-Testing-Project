import { Module } from '@nestjs/common';
import { StakeService } from './stake.service';
import { StakeController } from './stake.controller';

@Module({
  controllers: [StakeController],
  providers: [StakeService],
})
export class StakeModule {}
