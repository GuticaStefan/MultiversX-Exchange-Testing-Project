import { Test, TestingModule } from '@nestjs/testing';
import { ShardsController } from './shards.controller';
import { ShardsService } from './shards.service';

describe('ShardsController', () => {
  let controller: ShardsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShardsController],
      providers: [ShardsService],
    }).compile();

    controller = module.get<ShardsController>(ShardsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
