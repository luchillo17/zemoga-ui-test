import { Injectable } from '@nestjs/common';
import { Message } from '@zemoga-ui-test/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
