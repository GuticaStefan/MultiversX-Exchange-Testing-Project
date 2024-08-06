import { Module } from '@nestjs/common';
import { MexService } from './mex.service';
import { MexController } from './mex.controller';

@Module({
  controllers: [MexController],
  providers: [MexService],
})
export class MexModule {}
