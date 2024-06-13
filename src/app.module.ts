import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { RedisModule } from './endpoints-controller/redis.module'; 
import { ActionService } from './endpoints-controller/action.service';
import { ActionInterceptor } from './endpoints-controller/action.interceptor';
import { ActionController } from './endpoints-controller/action.controller'; 

@Module({
  imports: [
    ApiModule,
    RedisModule, 
  ],
  controllers: [
    AppController,
    ActionController,
  ],
  providers: [
    AppService,
    ActionService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ActionInterceptor,
    },
  ],
})
export class AppModule {}
