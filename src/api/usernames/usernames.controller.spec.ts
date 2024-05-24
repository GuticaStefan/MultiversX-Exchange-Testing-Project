import { Test, TestingModule } from '@nestjs/testing';
import { UsernamesController } from './usernames.controller';
import { UsernamesService } from './usernames.service';

describe('UsernamesController', () => {
  let controller: UsernamesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsernamesController],
      providers: [UsernamesService],
    }).compile();

    controller = module.get<UsernamesController>(UsernamesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
