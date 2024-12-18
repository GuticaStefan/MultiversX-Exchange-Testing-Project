import { Test, TestingModule } from '@nestjs/testing';
import { NftsController } from './nfts.controller';
import { NftsService } from './nfts.service';

describe('NftsController', () => {
  let controller: NftsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NftsController],
      providers: [NftsService],
    }).compile();

    controller = module.get<NftsController>(NftsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
