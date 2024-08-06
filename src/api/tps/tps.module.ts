import { Module } from '@nestjs/common';
import { TpsService } from './tps.service';
import { TpsController } from './tps.controller';

@Module({
  controllers: [TpsController],
  providers: [TpsService],
})
export class TpsModule {}
