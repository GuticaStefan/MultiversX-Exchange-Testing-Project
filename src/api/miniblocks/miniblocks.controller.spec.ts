import { Test, TestingModule } from '@nestjs/testing';
import { MiniblocksController } from './miniblocks.controller';
import { MiniblocksService } from './miniblocks.service';

describe('MiniblocksController', () => {
  let controller: MiniblocksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MiniblocksController],
      providers: [MiniblocksService],
    }).compile();

    controller = module.get<MiniblocksController>(MiniblocksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
