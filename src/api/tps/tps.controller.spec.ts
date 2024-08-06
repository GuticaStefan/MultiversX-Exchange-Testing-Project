import { Test, TestingModule } from '@nestjs/testing';
import { TpsController } from './tps.controller';
import { TpsService } from './tps.service';

describe('TpsController', () => {
  let controller: TpsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TpsController],
      providers: [TpsService],
    }).compile();

    controller = module.get<TpsController>(TpsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
