import { AppController } from '@infra/http/controllers/app.controller';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return `ok:true`', () => {
      expect(appController.healthcheck()).toEqual({ ok: true });
    });
  });
});
