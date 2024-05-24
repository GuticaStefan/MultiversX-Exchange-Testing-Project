import { Test, TestingModule } from '@nestjs/testing';
import { MexController } from './mex.controller';
import { MexService } from './mex.service';

describe('MexController', () => {
  let controller: MexController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MexController],
      providers: [MexService],
    }).compile();

    controller = module.get<MexController>(MexController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
