import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { ActionService } from './action.service';
import { error } from 'console';
import { isInstance } from 'class-validator';

@Injectable()
export class ActionInterceptor implements NestInterceptor {
  constructor(private readonly actionService: ActionService) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();
    const endpoint = request.route.path;
    
    if(endpoint === '/set/delay' || endpoint === '/set/error' ||
       endpoint === '/set/crash' || endpoint === '/set/data')
      return next.handle();

    const deelay = await this.actionService.getDelay(endpoint);

    const action = await this.actionService.getAction(endpoint);

    let endDelay = false;

    if(deelay) {
      await new Promise((resolve) => setTimeout(resolve, deelay.value));
      endDelay = true;
    }
    
    if (action) {
       if (action.type === 'crash') { 
        if(deelay == null || endDelay == true)
          process.exit(0); // process exit is designed to execute immediately so we must wait for the delay to end if it is set
      } else if(action.type === 'error') {
        throw new HttpException(action.error, action.error.statusCode);
      } else if(action.type === 'data') {
        if(action.data === "Internal data")
          return next.handle();
        return of(action.data);
      }
    }

    return next.handle();
  }
}
