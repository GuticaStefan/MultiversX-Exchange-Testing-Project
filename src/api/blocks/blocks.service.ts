import { Injectable } from '@nestjs/common';
import { db } from '../database/init-db';

@Injectable()
export class BlocksService {
async getBlocks(): Promise<any> {
    return db.blocks;
}

  async getBlocksCount(): Promise<number> {
    return db.blocks.length;
  }

//   async getLatestBlockDetails(): Promise<any> {}

//   async getBlockDetailsByHash(hash: string): Promise<any> {}
}
