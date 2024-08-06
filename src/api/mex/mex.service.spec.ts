import { Test, TestingModule } from '@nestjs/testing';
import { MexService } from './mex.service';

describe('MexService', () => {
  let service: MexService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MexService],
    }).compile();

    service = module.get<MexService>(MexService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
