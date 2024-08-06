import { Test, TestingModule } from '@nestjs/testing';
import { TpsService } from './tps.service';

describe('TpsService', () => {
  let service: TpsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TpsService],
    }).compile();

    service = module.get<TpsService>(TpsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
