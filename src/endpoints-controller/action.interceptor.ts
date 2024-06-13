import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { ActionService } from './action.service';
import { error } from 'console';

@Injectable()
export class ActionInterceptor implements NestInterceptor {
  constructor(private readonly actionService: ActionService) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();
    const endpoint = request.route.path;

    if(endpoint === '/set/endpoint-action')
      return next.handle();

    const action = await this.actionService.getAction(endpoint);
    
    if (action) {
      if (action.type === 'delay') {
        await new Promise((resolve) => setTimeout(resolve, action.value));
      } else if (action.type === 'crash') {
        process.exit(0);
      } else if(action.type === 'error') {
        throw new HttpException(action.error, action.error.statusCode);
      }
    }

    return next.handle();
  }
}
