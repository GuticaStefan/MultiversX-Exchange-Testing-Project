import { Module } from '@nestjs/common';
import { DappConfigService } from './dapp-config.service';
import { DappConfigController } from './dapp-config.controller';

@Module({
  controllers: [DappConfigController],
  providers: [DappConfigService],
})
export class DappConfigModule {}
