import { Test, TestingModule } from '@nestjs/testing';
import { MiniblocksService } from './miniblocks.service';

describe('MiniblocksService', () => {
  let service: MiniblocksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MiniblocksService],
    }).compile();

    service = module.get<MiniblocksService>(MiniblocksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
