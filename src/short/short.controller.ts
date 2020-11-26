import { Controller, Logger } from '@nestjs/common';

@Controller('short')
export class ShortController {
  private logger = new Logger('ShortController');
}
