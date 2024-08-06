import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TagsService } from './tags.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Get('/tags')
  async getNftTags(): Promise<any> {
    return this.tagsService.getNftTags();
  }

  @Get('/tags/count')
  async getNftTagsCount(): Promise<number> {
    return this.tagsService.getNftTagsCount();
  }

  @Get('/tags/:tag')
  async getTagDetails(
    @Param('tag')
    tag: string
  ): Promise<any> {
    return undefined;
  }
}
