import { Test, TestingModule } from '@nestjs/testing';
import { DappConfigController } from './dapp-config.controller';
import { DappConfigService } from './dapp-config.service';

describe('DappConfigController', () => {
  let controller: DappConfigController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DappConfigController],
      providers: [DappConfigService],
    }).compile();

    controller = module.get<DappConfigController>(DappConfigController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
