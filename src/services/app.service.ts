import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  healthcheck(): object {
    return { ok: true };
  }
}
