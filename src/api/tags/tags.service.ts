import { Injectable } from '@nestjs/common';
import { db } from '../database/init-db';

@Injectable()
export class TagsService {
    async getNftTags(): Promise<any> {
        return db.tags;
    }

    async getNftTagsCount(): Promise<number> {
        return db.tags.length;
    }
  
    async getTagDetails(tag: string): Promise<any> {}
}
