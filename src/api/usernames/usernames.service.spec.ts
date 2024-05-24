import { Test, TestingModule } from '@nestjs/testing';
import { UsernamesService } from './usernames.service';

describe('UsernamesService', () => {
  let service: UsernamesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsernamesService],
    }).compile();

    service = module.get<UsernamesService>(UsernamesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
