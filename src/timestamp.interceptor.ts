import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class TimestampInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = new Date();
    console.log(`Request received at: ${now.toISOString()}`);
    return next.handle().pipe(
      tap(() => console.log(`Response sent at: ${new Date().toISOString()}`)),
    );
  }
}
