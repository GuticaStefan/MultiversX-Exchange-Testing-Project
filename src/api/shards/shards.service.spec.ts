import { Test, TestingModule } from '@nestjs/testing';
import { ShardsService } from './shards.service';

describe('ShardsService', () => {
  let service: ShardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShardsService],
    }).compile();

    service = module.get<ShardsService>(ShardsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
