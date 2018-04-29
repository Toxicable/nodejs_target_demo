
import { Get, Controller } from '@nestjs/common';
import { Root } from './root.interface';

@Controller()
export class AppController {
  @Get()
  root(): Root {
    return {appName: 'HELLO WORLD'};
  }
}

var t = 3;
// t = 'asdf'
