import { Test, TestingModule } from '@nestjs/testing';
import { DappConfigService } from './dapp-config.service';

describe('DappConfigService', () => {
  let service: DappConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DappConfigService],
    }).compile();

    service = module.get<DappConfigService>(DappConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
