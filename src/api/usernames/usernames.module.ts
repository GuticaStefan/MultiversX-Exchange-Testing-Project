import { Module } from '@nestjs/common';
import { UsernamesService } from './usernames.service';
import { UsernamesController } from './usernames.controller';

@Module({
  controllers: [UsernamesController],
  providers: [UsernamesService],
})
export class UsernamesModule {}
