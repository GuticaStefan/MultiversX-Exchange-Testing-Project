import { Controller, Post, Body, Get } from '@nestjs/common';
import { ActionService } from './action.service';
import { ApiBody, ApiOkResponse, ApiProperty } from '@nestjs/swagger';

class SetDelayDto {
  @ApiProperty({ example : "/accounts/:address/tokens"})
  endpoint: string;

  @ApiProperty({ example : "5000"})
  value?: number = 0;
}

class SetCrashDto {
  @ApiProperty({ example : "/accounts/:address/tokens"})
  endpoint: string;
}

class SetErrorDto {
  @ApiProperty({ example : "/accounts/:address/tokens"})
  endpoint: string;

  @ApiProperty({
    example: {
      message: "Resource not found",
      error: "Not Found",
      statusCode: 404,
    },
  })
  error?: {
    message: string,
    error?: string,
    statusCode: number,
  } = undefined;
}

class SetDataDto {
  @ApiProperty({ example : "/accounts/:address/tokens"})
  endpoint: string;
  @ApiProperty({example:"Add whatever data you want the endpoint to response with or 'Internal data' to perform the internal response provided by the API"})
  data: any
}

@Controller('/set')
export class ActionController {
  constructor(private readonly actionService: ActionService) {}

  @ApiOkResponse({ type : SetDelayDto})
  @Post('/delay')
  @ApiBody({type: SetDelayDto})
  async setDelay(@Body() body: SetDelayDto) {
    await this.actionService.setDelay(body.endpoint, {type: 'delay', value: body.value} );
    return { message: 'Delay set successfully !' };
  }

  @Post('/crash')
  @ApiBody({type: SetCrashDto})
  async setCrash(@Body() body: SetCrashDto) {
    await this.actionService.setAction(body.endpoint, {type: 'crash'});
    return { message: 'Crash set successfully !' };
  }

  @Post('/error')
  @ApiBody({type: SetErrorDto})
  async setError(@Body() body: SetErrorDto) {
    await this.actionService.setAction(body.endpoint, {type: 'error', error: body.error} );
    return { message: 'Error set successfully !' };
  }

  @Post('/data')
  @ApiBody({type: SetDataDto})
  async setCustomResponse(@Body() body: SetDataDto) {
    await this.actionService.setAction(body.endpoint, {type: 'data', data: body.data} );
    return { message: 'Data set successfully !' };
  }

  @Get('/clear-actions')
  async clearActions() {
    return this.actionService.clearActions();
  }
}


