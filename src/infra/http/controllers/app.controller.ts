import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/healthcheck')
  healthcheck(): object {
    return { ok: true };
  }
}
